<template>
  <div id="app">
    <router-view></router-view>
    <FooterWrap v-if="this.$route.path !== '/profile'"/>
  </div>
</template>
<script>
import FooterWrap from './components/FooterWrap/FooterWrap';
export default {
  name: 'App',
  components: {//注册路由
    FooterWrap
  },
  data(){
    return {
    }
  },
  mounted(){
   
  }
}
</script>

<style>

</style>
