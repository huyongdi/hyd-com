import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button, Timeline, Tabs, List, Card } from "ant-design-vue"
import { createFromIconfontCN } from "@ant-design/icons-vue"

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1833037_bnr0sgpdc59.js"
})

const app = createApp(App)

app.component("IconFont", IconFont)

app.use(store)
  .use(Button).use(Timeline).use(Tabs).use(List).use(Card)
  .use(router)
  .mount("#app")
