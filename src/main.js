import Vue from 'vue'
import 'lib-flexible/flexible'
import {Button} from 'mint-ui'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false;
//js组件不需要注册，但css组件需要全局注册
Vue.component(Button.name, Button);


new Vue({
  el: '#app',
  render: h => h(App),
  /* 安装路由器 */
  router
});
