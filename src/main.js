import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button, Timeline, Tabs } from "ant-design-vue"
import { createFromIconfontCN } from "@ant-design/icons-vue"

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1833037_akdy69voubq.js"
})

const app = createApp(App)

app.component("IconFont", IconFont)

app.use(store)
  .use(Button).use(Timeline).use(Tabs)
  .use(router)
  .mount("#app")
