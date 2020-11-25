<template>
  <div class="articlePage">
    <a-tabs>
      <a-tab-pane v-for="menu in tabArr" :key="menu.key">
        <template #tab>
          <icon-font :type="getMenuIcon(menu.name)" />
          <span>{{ menu.name }}</span>
        </template>
        <a-list :data-source="menu.list" item-layout="vertical" class="rightArticle">
          <template #renderItem="{ item }">
            <a-list-item @click="showDetail(item)" class="pointer">
              <a-card :title="item.title">
                {{ item.description || "2015 - 2020" }}
              </a-card>
            </a-list-item>
          </template>
        </a-list>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import {
  webpackList,
  nginxList,
  htmlCSSList,
  jsList,
  appList,
  wStackList,
  otherList,
  notesList
} from "@/config/articleList"

export default {
  name: "Article",
  components: {},
  data() {
    return {
      tabArr: [
        {
          key: 1,
          name: "HTML/CSS",
          list: htmlCSSList
        },
        {
          key: 2,
          name: "JS",
          list: jsList
        },
        {
          key: 3,
          name: "公众号/小程序",
          list: appList
        },
        {
          key: 4,
          name: "小全栈",
          list: wStackList
        },
        {
          key: 5,
          name: "Webapck",
          list: webpackList
        },
        {
          key: 6,
          name: "Nginx",
          list: nginxList
        },
        {
          key: 7,
          name: "其他",
          list: otherList
        },
        {
          key: 8,
          name: "记文",
          list: notesList
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    showDetail(item) {
      window.open(`https://view.officeapps.live.com/op/view.aspx?src=http://www.huyongdi.com/doc/${item.title}.docx?${Math.random()}`)
    },
    getMenuIcon(name) {
      switch (name) {
        case "HTML/CSS":
          return "icon-html"
        case "JS":
          return "icon-js"
        case "Webapck":
          return "icon-webpack"
        case "Nginx":
          return "icon-nginx"
        default:
          return ""
      }
    },
    test() {


    }
  }
}
</script>

<style scoped lang="less">
.articlePage {
  .ant-tabs-tabpane {
    height: calc(~'100vh - 81px');
    overflow-y: auto;
  }
}
</style>
