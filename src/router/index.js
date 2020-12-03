import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Article from "../views/Article.vue"
import APP from "../views/APP.vue"

const routes = [
  {
    path: "/",
    name: "首页",
    component: Home
  },
  {
    path: "/about",
    name: "关于",
    component: About
  },
  {
    path: "/article",
    name: "文章",
    component: Article
  },
  {
    path: "/app",
    name: "APP声明",
    component: APP
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
