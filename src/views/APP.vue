<template>
  <div class="appWrap">
    <div class="introduce">
      介绍：旨在学习交流，从uniapp出发，进行app和小程序测试，进行中...
    </div>
    <div class="githubAddr">
      项目地址：https://github.com/huyongdi/my-app
    </div>
    <div class="download">
      <a href="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-ab88hy0uypiac206a5/ac4c8300-5960-11eb-a16f-5b3e54966275.apk"
         download="hydTest">
        点击下载APP
      </a>
    </div>
    <div class="privacy">
      隐私声明：本APP不收集任何手机信息, 只需要实时获取信息，比如地理位置，用户信息存储于阿里云Dcloud
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  mounted() {

  },
  methods: {}
}
</script>

<style lang="less">
.appWrap {
  .introduce {

  }

  .githubAddr {
    margin: 10px 0;
  }

  .download {

  }

  .privacy {
    position: fixed;
    bottom: 20px;
    left: 270px;
  }
}

.home {

}
</style>
