import Vue from 'vue'
import Router, { RawLocation, Route } from "vue-router";
import { ErrorHandler } from "vue-router/types/router";
import { component } from "vue/types/umd";
Vue.use(Router);

// 解决导航菜单的时候，重复点击报错的问题
// https://my.oschina.net/u/4256357/blog/4304073
const originalPush = Router.prototype.push
Router.prototype.push = function push(location:any) {
  return (originalPush.call(this, location) as any).catch((err:any) => err)
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: () => import("@/views/index.vue"),
    },
  ],
});
