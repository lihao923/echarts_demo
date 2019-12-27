<template>
  <div class="map1">
    <div :id="id" style="width: 365px; height: 265px;"></div>
  </div>
</template>
<script>
import hkJson from '@/assets/js/HK.json'
export default {
  name: 'map1',
  props: {
    map1: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      id: this.map1.id,
      charts: {}
    }
  },
  mounted () {
    this.initMapData()
  },
  methods: {
    initMapData () {
      this.$echarts.registerMap('HK', hkJson)
      const mapData = this.map1.arr
      let options = {
        title: {
          x: 'center',
          y: 'top',
          text: '香港18区人口密度 （2011）',
          subtext: '人口密度数据来自Wikipedia',
          sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          right: '15px',
          bottom: '0',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 800,
          max: 50000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: false,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          },
          controller: {
            left: '110px',
            bottom: 0,
            width: '5px'
          }
        },
        series: [
          {
            name: '香港18区人口密度',
            x: 'center',
            y: 'bottom',
            type: 'map',
            mapType: 'HK', // 自定义扩展图表类型
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: mapData,
            // 自定义名称映射
            nameMap: {
              'Central and Western': '中西区',
              Eastern: '东区',
              Islands: '离岛',
              'Kowloon City': '九龙城',
              'Kwai Tsing': '葵青',
              'Kwun Tong': '观塘',
              North: '北区',
              'Sai Kung': '西贡',
              'Sha Tin': '沙田',
              'Sham Shui Po': '深水埗',
              Southern: '南区',
              'Tai Po': '大埔',
              'Tsuen Wan': '荃湾',
              'Tuen Mun': '屯门',
              'Wan Chai': '湾仔',
              'Wong Tai Sin': '黄大仙',
              'Yau Tsim Mong': '油尖旺',
              'Yuen Long': '元朗'
            }
          }
        ]
      }
      console.log(this.map1.arr)
      this.charts = this.$echarts.init(document.getElementById(this.id))
      this.charts.setOption(options)
    }
  }
}
</script>
