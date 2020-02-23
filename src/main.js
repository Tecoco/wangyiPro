import Vue from 'vue'
import 'lib-flexible/flexible'
import {Field} from 'mint-ui'
import router from './router'
import store from './store'

import App from './App.vue'
import * as API from './api'
import './veevalidate'
import waterfall from "vue-waterfall2"
//////
//下面这段代码，解决在cateList页面刷新时，报错问题
//Uncaught (in promise) NavigationDuplicated 
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//////

Vue.use(waterfall);
Vue.config.productionTip = false;
//js组件不需要注册，但css组件需要全局注册
Vue.component(Field.name, Field);
//事件总线对象: 将所有发送请求的额方法都放在Vue的原型对象上
Vue.prototype.$API = API;

new Vue({
  el: '#app',
  render: h => h(App),
  /* 安装路由器 */
  router,
  store,
  beforeCreate () { // 尽量早的执行挂载全局事件总线对象的操作
  },
});
