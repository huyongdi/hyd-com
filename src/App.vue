<template>
  <div id="all">
    <LeftMenu />
    <router-view id="rightMenu" />
  </div>
</template>

<script>
import LeftMenu from "@/layout/LeftMenu"

export default {
  name: "app",
  components: {
    LeftMenu
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  #all {
    display: flex;
    height: 100vh;

    #rightMenu {
      flex: 1;
    }

    //a {
    //  font-weight: bold;
    //  color: #2c3e50;
    //  padding: 5px;
    //
    //  &.router-link-exact-active {
    //    color: #42b983;
    //  }
    //}
  }

  //这里直接写公共样式
  ul {
    padding: 0;

    li {
      list-style: none;
    }
  }
}
</style>
