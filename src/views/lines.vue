<template>
  <div class="lines">
    <div class="wrap">
      <Line0 :lineChartArr="lineChartArr"></Line0>
    </div>
  </div>
</template>
<script>
import Line0 from '../components/lines/line0'
export default {
  name: 'lines',
  data () {
    return {
      // line-chart组件模拟数据，后期可替换为接口返回数据
      lineChartArr: [
        {
          dateIdx: 0,
          fund: [2, 3, 2, 3, 1, 4, 2],
          hs300: [1, 3, 1, 3, -1, 0, 3],
          xAxisData: ['2014', '2015', '2016', '2017', '2018', '2019']
        },
        {
          dateIdx: 1,
          fund: [-2, 1, 1, -3, 2, -4, 2],
          hs300: [2, 3, -2, 3, 1, 4, 2],
          xAxisData: ['07-01', '07-02', '07-03', '07-04', '07-05', '07-06', '07-07']
        },
        {
          dateIdx: 2,
          fund: [2, 3, 1, -3, 1, -4, 2],
          hs300: [2, 3, 4, 3, 1, 4, 2],
          xAxisData: ['2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12']
        },
        {
          dateIdx: 3,
          fund: [2, 3, 1, 1, 1, 4, 2],
          hs300: [1, 3, -1, 3, 1, 4, 2],
          xAxisData: ['2018-12', '2019-02', '2019-04', '2019-06', '2019-08', '2019-10', '2019-12']
        },
        {
          dateIdx: 4,
          fund: [2, -3, 1, -3, 1, -4, 2],
          hs300: [2, -3, 2, 3, 1, 4, 2],
          xAxisData: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
        }
      ]
    }
  },
  components: {
    Line0
  }
}
</script>
<style lang="less" scoped>

</style>
