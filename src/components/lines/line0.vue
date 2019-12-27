<template>
<div class="line-wapper">
  <div id="lineChart" style="width: 100%; height: 280px; padding: 0;"></div>
  <div class="date">
    <span
      v-for="(date, index) in dateArr"
      :key="index"
      :class="index === dateIndex ? 'active' : ''"
      @click="switchDate(index)"
    >{{date}}</span>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'line-chart',
  props: {
    lineChartArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      dateIndex: 0,
      dateArr: ['近一月', '近三月', '近六月', '近一年', '成立至今'],
      fundArr: [1, 1, -1, 1, 1, 1, 1], // 默认模拟数据
      hs300Arr: [3, 3, 3, 3, -3, 3, 3], // 默认模拟数据
      fundSum: 0,
      hs300Sum: 0,
      xAxisArr: ['2014', '2015', '2016', '2017', '2018', '2019'], // 默认模拟数据
      lineChartData: {}
    }
  },

  created () {
    // 初始化fundArr，hs300Arr，fundSum，hs300Sum
    this.initLegendData(0)
  },

  mounted () {
    this.drawLineChart()
  },
  methods: {
    // 图表绘制函数
    drawLineChart () {
      let options = {
        grid: {
          x: 60,
          y: 50,
          x2: 20,
          y2: 45
        },
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [
            {
              name: '本基金：' + this.fundSum,
              icon: 'square'
            },
            {
              name: '沪深300：' + this.hs300Sum,
              icon: 'square'
            }
          ]
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xAxisArr,
          splitLine: {
            show: false
          },
          // x轴颜色
          axisLine: {
            lineStyle: {
              color: '#eaeaea'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 40, // 控制横坐标标签是否旋转，可动态设置值
            textStyle: {
              fontSize: '10',
              color: '#999'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}.00%',
            textStyle: {
              fontSize: '12',
              color: '#999'
            }
          },
          // y轴颜色
          axisLine: {
            lineStyle: {
              color: 'transparent'
            }
          },
          // 坐标轴内线的样式
          splitLine: {
            lineStyle: {
              color: '#eaeaea'
            }
          }
        },
        series: [
          {
            // 折线颜色
            itemStyle: {
              normal: {
                color: '#6C9BD2',
                lineStyle: {
                  color: '#6C9BD2'
                }
              }
            },
            name: '本基金：' + this.fundSum,
            type: 'line',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#afdff6' },
                  { offset: 1, color: '#fff' }
                ]),
                origin: 'start'
              }
            },
            data: this.fundArr
          },
          {
            // 折线颜色
            itemStyle: {
              normal: {
                color: '#FAC982',
                lineStyle: {
                  color: '#FAC982'
                }
              }
            },
            name: '沪深300：' + this.hs300Sum,
            icon: 'circle',
            type: 'line',
            data: this.hs300Arr
          }
        ]
      }

      this.lineChartData = options

      // 完成数据初始化绑定
      this.dataInit()
    },

    // 初始化画图数据
    dataInit () {
      let myChart = echarts.init(document.getElementById('lineChart'))
      myChart.setOption(this.lineChartData)
    },

    // 点击切换日期数据
    switchDate (index) {
      this.fundSum = 0
      this.hs300Sum = 0
      this.dateIndex = index
      this.xAxisArr = this.lineChartArr[index].xAxisData
      this.initLegendData(index)

      this.drawLineChart()
    },

    initLegendData (index) {
      this.fundArr = this.lineChartArr[index].fund
      this.hs300Arr = this.lineChartArr[index].hs300
      for (let i = 0; i < this.fundArr.length; i++) {
        this.fundSum += this.fundArr[i]
      }

      if (this.fundSum > 0) {
        this.fundSum = '+' + this.fundSum + '%'
      } else {
        this.fundSum = this.fundSum + '%'
      }

      for (let i = 0; i < this.hs300Arr.length; i++) {
        this.hs300Sum += this.hs300Arr[i]
      }

      if (this.hs300Sum > 0) {
        this.hs300Sum = '+' + this.hs300Sum + '%'
      } else {
        this.hs300Sum = this.hs300Sum + '%'
      }
    }
  }
}
</script>
<style lang='less' scoped>
.line-wapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #fff;

  .date {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92%;

    span {
      padding: 4px 0;
      width: 20%;
      border: 2px solid #eaeaea;
      border-left: 2px solid transparent;
      font-size: 14px;
      text-align: center;
      color: #ccc;

      &:first-child {
        border-left: 2px solid #eaeaea;
        border-radius: 5px 0 0 5px;
      }

      &:last-child {
        border-right: 2px solid #eaeaea;
        border-radius: 0 5px 5px 0;
      }

      &.active {
        color: #369fea;
      }
    }
  }
}
</style>
