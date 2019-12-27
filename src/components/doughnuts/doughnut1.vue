<template>
  <div>
    <div :id="pineEchartsId" style="width: 380px; height: 230px; padding: 0;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'constitution-echart',
  data () {
    return {
      pineEchartsId: 'constitutionEchart' + this.setData.id,
      pineEchartOpt: {}
    }
  },
  props: {
    setData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    this.preLoadEchart()
  },
  methods: {
    preLoadEchart () {
      let count = 0
      let data = []
      let defaultDynaColor = [
        ['#FF825E', '#F06662'],
        ['#FFBA60', '#FF9A64'],
        ['#FDE67B', '#F6D55B'],
        ['#88B1F9', '#5892E9'],
        ['#A2B6FF', '#8E99FF']
      ]
      let setConstitutionData = this.setData.arr
      setConstitutionData &&
        setConstitutionData.forEach &&
        setConstitutionData.forEach((e, index) => {
          let temp = {
            value: '',
            name: '',
            icon: 'circle',
            itemStyle: {
              normal: {
                // 颜色渐变
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '' },
                  { offset: 0.5, color: '' }
                ])
              }
            }
          }
          temp.value = e.value
          temp.name = e.name
          let colorIndex = count % defaultDynaColor.length
          count++
          temp.itemStyle.normal.color = new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              // 循环的用颜色
              { offset: 0, color: defaultDynaColor[colorIndex][0] },
              { offset: 0.5, color: defaultDynaColor[colorIndex][1] }
            ]
          )
          data.push(temp)
        })
      let option = {
        title: {
          text: '组合配置比列',
          left: 48,
          top: 106,
          textStyle: {
            fontFamily: 'PingFangSC-Regular',
            fontSize: 16,
            color: '#555555',
            letterSpacing: 0
          }
        },
        legend: {
          orient: 'vertical',
          left: 200,
          top: 60,
          data: data,
          type: 'scroll',
          formatter: function (param) {
            let target
            for (let i = 0; i < data.length; i++) {
              if (data[i].name === param) {
                // 在这里面将数据转换成百分数
                target = data[i].value + '%'
              }
            }
            let arr = ['{a|' + param + '}', '{b|' + target + '}']
            return arr.join(' ')
          },
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
          }
        },
        series: [
          {
            name: '组合配置比列',
            type: 'pie',
            radius: [60, 75],
            center: [100, 120], // 距离左右，上下距离的百分比
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            data: data
          }
        ]
      }
      this.pineEchartOpt = option
      this.loadConstitutionEchart()
    },
    loadConstitutionEchart () {
      let myChart = echarts.init(document.getElementById(this.pineEchartsId))
      myChart.setOption(this.pineEchartOpt)
    }
  }
}
</script>

<style scoped>
</style>
