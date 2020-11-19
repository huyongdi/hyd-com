import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button } from "ant-design-vue"
import { createFromIconfontCN } from "@ant-design/icons-vue"

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1833037_sbw07hft31d.js"
})

const app = createApp(App)

app.component("IconFont", IconFont)

app.use(store)
  .use(Button)
  .use(router)
  .mount("#app")
