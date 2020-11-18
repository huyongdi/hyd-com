<template>
  <div id="leftMenu">
    <img src="../assets/hyd.jpg" alt="左侧头像" class="myPhoto">
    <h2 class="myName">胡永迪</h2>
    <h3 class="myIntroduce">今天你毛化了吗？</h3>
    <ul class="menus">
      <li v-for="menu in menuList" :key="menu.path" :class="[menu.path === currentPath ? 'in' : '']"
          @click="jumpToRouter(menu.path)">
        <icon-font :type="getIconByName(menu.path)" />
        <div class="text">{{ menu.name }}</div>
      </li>
    </ul>

  </div>
</template>

<script>
// import { HomeOutlined } from "@ant-design/icons-vue"
import router from "../router"

console.log(router.getRoutes())

export default {
  name: "LeftMenu",
  components: {
    // HomeOutlined
  },
  data() {
    return {
      menuList: router.getRoutes(),
      currentPath: null

    }
  },
  watch: {
    $route(to) { // 对路由变化作出响应...
      this.currentPath = to.path
    }
  },
  methods: {
    // 通过路由path得到图片
    getIconByName(name) {
      switch (name) {
        case "/":
          return "icon-home"
        case "/about":
          return "icon-guanyu"
        case "/article":
          return "icon-wenzhang"
        default:
          return "icon-home"
      }
    },
    // 跳转到指定的route页面
    jumpToRouter(path) {
      router.push(path)
    }
  }

}
</script>

<style scoped lang="less">
#leftMenu {
  width: 250px;
  background: #2b2b2b;
  color: #aaa;
  padding-top: 30px;
  display: flex;
  //justify-content: center;
  flex-direction: column;
  align-items: center;

  .myPhoto {
    width: 125px;
    height: 125px;
    border-radius: 50%;
  }

  .myName {
    margin-top: 20px;
    color: #fff;
  }

  .myIntroduce {
    color: #aaa;
  }

  .menus {
    width: 100%;
    margin-top: 30px;

    > li {
      color: #aaa;
      height: 47px;
      line-height: 47px;
      background: #303030;
      border-top: 1px solid #373737;
      border-bottom: 1px solid #2b2b2b;
      transition: background 0.5s;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:hover {
        background: #363636;
        border-top: 1px solid #3d3d3d;
        border-bottom: 1px solid #252525;

        > span {
          color: #fff;
        }

        .text {
          color: #fff;
        }
      }

      > span {
        font-size: 25px;
        margin: 0 15px;
      }

      .text {
        flex: 1;
        box-shadow: -3px 0 5px -4px #000;
        padding-left: 20px;
      }
    }

    > li.in {
      background: #363636;
      border-top: 1px solid #3d3d3d;
      border-bottom: 1px solid #252525;

      > span {
        color: dodgerblue;
      }

      .text {
        color: #fff;
      }
    }
  }
}
</style>
