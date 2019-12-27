<template>
  <div class="doughnut0">
    <!-- 为echarts准备一个具备大小的容器dom -->
    <div :id="id" style="width: 350px;height: 280px;"></div>
  </div>
</template>
<script>
export default {
  name: 'circle-chart',
  props: {
    doughnutData0: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      id: this.doughnutData0.id,
      charts: '',
      opinionData: {},
      sum: 0
      // opinion: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    }
  },
  // 调用
  mounted () {
    for (let i = 0; i < this.doughnutData0.arr.length; i++) {
      this.sum += this.doughnutData0.arr[i].value
    }
    // console.log(this.sum)

    this.$nextTick(() => {
      this.dataPrepare()
    })
  },
  methods: {
    dataPrepare () {
      let that = this
      let chartData = []
      let count = 0
      let linearColor = [['#FF825E', '#F06662'], ['#FFBA60', '#FF9A64'], ['#FDE67B', '#F6D55B'], ['#88B1F9', '#5892E9'], ['#A2B6FF', '#8E99FF']]
      let tempData = this.doughnutData0.arr
      tempData.forEach((e, index) => {
        let temp = {
          value: '',
          name: '',
          itemStyle: {
            normal: { // 颜色渐变
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '' }, { offset: 0.5, color: '' }])
            }
          }
        }
        temp.value = e.value
        temp.name = e.name
        let colorIndex = count % linearColor.length
        // let a = linearColor[colorIndex][0]
        // let b = linearColor[colorIndex][1]
        count++
        temp.itemStyle.normal.color = new this.$echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [ // 循环的用颜色
            { offset: 0, color: linearColor[colorIndex][0] },
            { offset: 0.5, color: linearColor[colorIndex][1] }
          ]
        )
        chartData.push(temp)
      })

      let options = {
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },

        title: {
          text: '组合配置比列',
          left: 58,
          top: 128,
          textStyle: {
            fontFamily: 'PingFangSC-Regular',
            fontSize: 16,
            color: '#555555',
            letterSpacing: 0
          }
        },

        legend: {
          orient: 'vertical',
          left: 210,
          top: 80,
          icon: 'circle',
          type: 'scroll',
          // data: chartData,
          textStyle: {
            rich: {
              a: {
                fontFamily: 'DINPro-Medium',
                fontSize: 13,
                color: '#555555'
              },
              b: {
                fontSize: 16,
                color: '#222222'
              }
            }
          },
          formatter (param) {
            let target
            for (let i = 0; i < chartData.length; i++) {
              if (chartData[i].name === param) {
                target = ((chartData[i].value / that.sum) * 100).toFixed(2) + '%' // 在这里面将数据转换成百分数
              }
            }
            let arr = ['{a|' + param + '}', '{b|' + target + '}']
            return arr.join(' ')
          }
        },

        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: [ 100, 140 ], // 距离左右，上下距离的百分比
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: chartData
          }
        ]
      }

      this.opinionData = options
      this.drawGraphics()
    },

    drawGraphics () {
      this.charts = this.$echarts.init(document.getElementById(this.id))
      this.charts.setOption(this.opinionData)
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
