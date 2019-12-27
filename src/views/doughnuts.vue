<template>
  <div class="doughnuts">
    <div class="wrap">
      <div>环形图0</div>
      <Doughnut0 :doughnutData0="doughnutData0[0]"></Doughnut0>
    </div>
    <div class="box">
      <div v-for="(item, index) in [0, 1, 2, 3]" :key="index">
        <Doughnut1 :setData="setData[index]"></Doughnut1>
      </div>
    </div>
  </div>
</template>
<script>
import Doughnut0 from '../components/doughnuts/doughnut0'
import Doughnut1 from '../components/doughnuts/doughnut1'
export default {
  name: 'doughnuts',
  data () {
    return {
      setData: [
        {
          id: 'id0',
          arr: [
            {
              value: 11.11,
              name: '股票'
            },
            {
              value: 11.11,
              name: '现金'
            },
            {
              value: 11.11,
              name: '债券'
            },
            {
              value: 11.11,
              name: '商品'
            },
            {
              value: 66.66,
              name: '其他'
            }
          ]
        },
        {
          id: 'id1',
          arr: [
            {
              value: 22.22,
              name: '股票'
            },
            {
              value: 22.22,
              name: '现金'
            },
            {
              value: 22.22,
              name: '债券'
            },
            {
              value: 22.22,
              name: '商品'
            },
            {
              value: 22.22,
              name: '其他'
            }
          ]
        },
        {
          id: 'id2',
          arr: [
            {
              value: 11.11,
              name: '股票'
            },
            {
              value: 11.11,
              name: '现金'
            },
            {
              value: 11.11,
              name: '债券'
            },
            {
              value: 22.22,
              name: '商品'
            },
            {
              value: 55.55,
              name: '其他'
            }
          ]
        },
        {
          id: 'id3',
          arr: [
            {
              value: 11.11,
              name: '股票'
            },
            {
              value: 11.11,
              name: '现金'
            },
            {
              value: 11.11,
              name: '债券'
            },
            {
              value: 11.11,
              name: '商品'
            },
            {
              value: 66.66,
              name: '其他'
            }
          ]
        }
      ],
      doughnutData0: [
        {
          id: 'blabla1',
          arr: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 535, name: '视频广告' },
            { value: 158, name: '搜索引擎' }
          ]
        },
        {
          id: 'blabla2',
          arr: [
            { value: 335, name: '直接访问2' },
            { value: 310, name: '邮件营销2' },
            { value: 234, name: '联盟广告2' },
            { value: 535, name: '视频广告2' },
            { value: 158, name: '搜索引擎2' }
          ]
        }
      ]
    }
  },
  components: {
    Doughnut0,
    Doughnut1
  }
}
</script>
<style lang="less" scoped>
</style>
