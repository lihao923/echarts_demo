<template>
  <div class="maps">
    <div class="wrap" style="background-color: rgba(255,0,0,.05);">
      <div>地图0</div>
      <Map0 :map0="map0"></Map0>
    </div>
    <div class="wrap" style="background-color: rgba(0,255,0,.05);">
      <div>地图1</div>
      <Map1 :map1="map1[0]"></Map1>
    </div>
  </div>
</template>
<script>
import Map0 from '../components/maps/map0'
import Map1 from '../components/maps/map1'
export default {
  name: 'maps',
  data () {
    return {
      map0: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [
          { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
          { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
          { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
          { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 },
          { '位置': '安徽', '税收': 9123, '人口': 9123, '面积': 99234 }
        ]
      },
      map1: [
        {
          id: 'map1_0',
          arr: [
            { name: '中西区', value: 20057.34 },
            { name: '湾仔', value: 15477.48 },
            { name: '东区', value: 31686.1 },
            { name: '南区', value: 6992.6 },
            { name: '油尖旺', value: 44045.49 },
            { name: '深水埗', value: 40689.64 },
            { name: '九龙城', value: 37659.78 },
            { name: '黄大仙', value: 45180.97 },
            { name: '观塘', value: 55204.26 },
            { name: '葵青', value: 21900.9 },
            { name: '荃湾', value: 4918.26 },
            { name: '屯门', value: 5881.84 },
            { name: '元朗', value: 4178.01 },
            { name: '北区', value: 2227.92 },
            { name: '大埔', value: 2180.98 },
            { name: '沙田', value: 9172.94 },
            { name: '西贡', value: 3368 },
            { name: '离岛', value: 806.98 }
          ]
        }
      ]
    }
  },
  components: {
    Map0,
    Map1
  }
}
</script>

<style lang="less" scoped>
  .maps {
    padding-bottom: 50px;

    .wrap {
      padding: 20px 0;
    }
  }
</style>
