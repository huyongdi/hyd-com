<template>
  <div class="about">
    <div class="top">
      <div class="timeLine">
        <div class="timeTitle">
          <icon-font type="icon-timeline" />
          经历
        </div>
        <a-timeline mode="alternate">
          <a-timeline-item>2011.09 - 2015.06 华科文华-电子信息</a-timeline-item>
          <a-timeline-item color="green">2011 - 2015 DOTA2鱼塘选手</a-timeline-item>
          <a-timeline-item>2015.07 - 2018.03 武汉前端</a-timeline-item>
          <a-timeline-item color="green">2016 - 至今 DOTA2云玩家 恰鸡选手</a-timeline-item>
          <a-timeline-item>2018.03 - 2021.0x 重庆前端</a-timeline-item>
        </a-timeline>
      </div>
      <div class="timeMap" id="aboutMap"></div>
    </div>
    <div class="md">
      <span @click="lookResume">在线预览简历</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "About",
  components: {},
  data() {
    return {
      mapCenter: new window.BMap.Point(114.405733, 30.511933) // 地图中心点
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      let map = new window.BMap.Map("aboutMap") // 创建地图实例
      map.centerAndZoom(this.mapCenter, 15) // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
    },
    lookResume() {
      window.open(`https://view.officeapps.live.com/op/view.aspx?src=https://www.huyongdi.com/doc/前端-胡永迪简历.doc?${Math.random()}`)
    }
  }
}
</script>

<style scoped lang="less">
.about {
  .top {
    display: flex;
    height: 300px;

    .timeLine {
      width: 520px;
      margin-right: 15px;
      border: 1px solid #d3d3d3;
      padding: 10px;

      .timeTitle {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 15px;

        .anticon {
          margin-right: 10px;
        }
      }
    }

    .timeMap {
      flex: 1;
    }
  }

  .md {
    height: calc(~'100% - 300px');
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      font-size: 16px;
      cursor: pointer;
      color: #1890ff;

      &:hover {
        color: #000099;
      }
    }
  }
}
</style>
