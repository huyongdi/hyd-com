<template>
  <div class="articlePage">
    <a-tabs>
      <a-tab-pane key="1">
        <template #tab>
          <icon-font type="icon-webpack" />
          <span>Webapck</span>
        </template>
        <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item @click="showDetail" class="pointer">
              <a-card :title="item.title">
                Card content
              </a-card>
            </a-list-item>
          </template>
        </a-list>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <icon-font type="icon-nginx" />
          <span>Nginx</span>
        </template>
        Tab 2
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>

export default {
  name: "Article",
  components: {},
  data() {
    return {
      data: [{
        title: "Title 1"
      },
        {
          title: "Title 2"
        },
        {
          title: "Title 3"
        },
        {
          title: "Title 4"
        }]
    }
  },
  mounted() {

  },
  methods: {
    showDetail(){
      console.log(222)
    }
  }
}
</script>

<style scoped lang="less">
.articlePage {

}
</style>
