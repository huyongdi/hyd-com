<template>
  <div class="articlePage">
    <a-tabs>
      <a-tab-pane key="1">
        <template #tab>
          <span>Webapck</span>
        </template>
        Tab 1
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
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
    return {}
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped lang="less">
.articlePage {

}
</style>
