<template>
  <div id="nav">
    <a-button type="primary">
      Primary
    </a-button>
    <router-link to="/">主页</router-link>
    |
    <router-link to="/about">关于</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "app"
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;
      padding: 5px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
