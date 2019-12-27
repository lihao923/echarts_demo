<template>
  <ve-map :data="map0" :settings="chartSettings"></ve-map>
</template>

<script>
export default {
  name: 'map0',
  props: {
    map0: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    this.chartSettings = {
      position: 'china',
      label: true,
      itemStyle: {
        normal: {
          borderColor: '#000'
        }
      },
      zoom: 1,
      mapGrid: {
        top: 30,
        left: 0
      }
    }
    return {}
  }
}
</script>
<style lang="less" scoped>
</style>
