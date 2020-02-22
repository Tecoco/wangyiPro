<template>
  <div id="login-mode-wrap" v-show="isShowLogin">
    <div class="logo-wrap">
      <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <div class="user-box">
     <form>
        <!-- 手机号登录 -->
        <div class="phone-mode" v-show="!isShowLogin">
          <input name="phone" v-model="phone" v-validate="'required|mobile'" type="tel" maxlength="11" placeholder="请输入手机号" />
          <input v-model="captcha" name="captcha" v-validate="'required|code'" type="text" maxlength="8" placeholder="请输入短信验证码" />
          <div class="problem-pwd-wrap">
            <span class="problem">遇到问题？</span>
            <span class="pwd">使用密码验证登录</span>
          </div>
          <button class="login-btn" @click.prevent="login">登录</button>
          <div class="is-agree">
            <input type="checkbox">
            <span>我同意</span>
            <span class="link">《服务条款》</span>
            <span>和</span>
            <span class="link">《网易隐私政策》</span>
          </div>
          <div class="foot" @click="handleSkip">
            <span>其他登录方式<i class="iconfont icon-jiankuohaoyou"></i></span>
          </div>
        </div>
        <!-- 邮箱账号登录 -->
        <div class="email-mode">
          <input name="phone" v-model="phone" v-validate="'required|mobile'" type="email" maxlength="11" placeholder="邮箱账号" />
          <input v-model="captcha" name="captcha" v-validate="'required|code'" type="text" maxlength="8" placeholder="密码" />
          <div class="problem-pwd-wrap">
            <span class="problem">注册账号</span>
            <span class="pwd">忘记密码</span>
          </div>
          <button class="login-btn" @click.prevent="login">登录</button>
          <div class="foot" @click="handleSkip">
            <span>其他登录方式<i class="iconfont icon-jiankuohaoyou"></i></span>
          </div>
        </div>
     </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props: ['isShowLogin'],
      data(){
          return {
            phone: '',
            captcha: '',
            isSubShowLogin: false
          }
      },
     methods: {
      login(){

      },
      handleSkip(){
        this.isShowLogin = false;
        this.$emit('one', this.isShowLogin);
      }
     }
  }
</script>

<style lang="stylus" scoped>
#login-mode-wrap
  width 100%
  .logo-wrap
    width 268px
    height 90px
    margin 56px auto
    >img 
      width 100%
      height 100%
  //用户登录方式
  .user-box
    width 100%
    padding 0 40px
    box-sizing border-box
    //手机号登录方式
    .phone-mode
      >input
        width 100%
        outline none
        vertical-align text-bottom
        font-size 28px
        color #666
        border-bottom 1px solid #eee
        height 120px          
      .problem-pwd-wrap
        display flex
        justify-content space-between
        padding 42px 0
        color #666
        font-size 28px
        .pwd
          color #333
      .login-btn
        width 100%
        height 92px
        line-height 92px
        text-align center
        color #fff
        background-color #DD1A21
        font-size 28px
        border none
        border-radius 10px
      .is-agree
        width 100%
        margin-top 30px
        >input 
          width 27px
          height 27px
          border 1px solid #eee
          outline none
          vertical-align middle
          margin-right 12px
        >span 
          color #7f7f7f
          font-size 24px
          vertical-align middle
        .link
          color #007AFF
      .foot
        width 100%
        text-align center
        margin-top 80px
        font-size 28px
        vertical-align middle
        span
          position relative
          color #333
          >i 
            position absolute
            right -34px
            top 50%
            transform translateY(-50%)
            color #999
            font-size 28px      
    //邮箱账号登录方式
    .email-mode
      margin-top 130px
      >input
        width 100%
        outline none
        vertical-align text-bottom
        font-size 28px
        color #666
        border-bottom 1px solid #eee
        height 100px          
      .problem-pwd-wrap
        display flex
        justify-content space-between
        padding 42px 0
        color #7f7f7f
        font-size 28px
       
      .login-btn
        width 100%
        height 92px
        line-height 92px
        text-align center
        color #fff
        background-color #DD1A21
        font-size 28px
        border none
        border-radius 10px
      .is-agree
        width 100%
        margin-top 30px
        >input 
          width 27px
          height 27px
          border 1px solid #eee
          outline none
          vertical-align middle
          margin-right 12px
        >span 
          color #7f7f7f
          font-size 24px
          vertical-align middle
        .link
          color #007AFF
      .foot
        width 100%
        text-align center
        margin-top 80px
        font-size 28px
        vertical-align middle
        span
          position relative
          color #333
          >i 
            position absolute
            right -34px
            top 50%
            transform translateY(-50%)
            color #999
            font-size 28px      








</style>
