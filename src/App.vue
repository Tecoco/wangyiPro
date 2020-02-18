<template>
  <div id="app">
    <router-view></router-view>
    <FooterWrap />
  </div>
</template>

<script>
import FooterWrap from './components/FooterWrap/FooterWrap';
export default {
  name: 'App',
  components: {//注册路由
    FooterWrap
  }
}
</script>

<style>

</style>
