<template>
  <div id="app">
    <!-- <IndexPage v-if="isShow"></IndexPage>
    <LoginPage v-else></LoginPage>-->
    <!-- <Footer></Footer> -->
    <!-- <newsCom title="世界杯" anthor="全球" content="今日开赛"></newsCom> -->
    <!-- <components :is="com"></components> -->
    <!-- <button @click="isShow = !isShow">切换显示登陆或者首页</button> -->
    <!-- <button @click="fn">切换显示登陆或者首页</button> -->
    <IndexPage></IndexPage>
    
  </div>
</template>

<script>
import IndexPage from './page/index'
import LoginPage from './page/Login'
import newsCom from './components/News-com'


export default {
  
  components: {
    IndexPage, LoginPage,newsCom
  },
  methods:{
    fn:function(){
      if(this.isShow){
        this.com =  LoginPage
      }else{
        this.com =  IndexPage
      }
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
