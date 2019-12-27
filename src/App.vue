<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">饼型图</router-link>
      <router-link to="/lines">折线图</router-link>
      <router-link to="/bars">柱状图</router-link>
      <router-link to="/doughnuts">环形图</router-link>
      <router-link to="/gauges">仪表盘</router-link>
      <router-link to="/scatters">散点图</router-link>
      <router-link to="/funnels">漏斗图</router-link>
      <router-link to="/customs">自定义</router-link>
      <router-link to="/datasets">数据集</router-link>
      <router-link to="/richtexts">富文本</router-link>
      <router-link to="/radars">雷达图</router-link>
      <router-link to="/maps">地图类</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: wrap;
  padding: 10px;
  background-color: #eaeaea;
  border-bottom: 1px solid #eaeaea;

  a {
    width: 20%;
    height: 24px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
