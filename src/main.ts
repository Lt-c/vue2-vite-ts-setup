import Vue, { VueConstructor } from "vue";
import VueCompositionAPI, { createApp } from "@vue/composition-api";
Vue.use(VueCompositionAPI);
import router from "@/router/index";


import { createPinia, PiniaVuePlugin  } from 'pinia'
Vue.use(PiniaVuePlugin )
// const store = createPinia();

//iview配置
import { Message, LoadingBar, Modal, Notice, Spin } from "view-design";

Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Spin = Spin;




import App from "./App.vue";

// new Vue({
//   el: "#app",
//   router,
//   pinia: store,//使用了插件才会有这个属性
//   render: h => h(App),
// });
createApp({
  pinia: createPinia(),
  render: (h: (arg0: VueConstructor<Vue>) => any) => h(App),
  router,
}).mount('#app')
