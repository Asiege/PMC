<template>
  <div id="app">
    <components :is="com" @changeComEvent="changeCom" :resultData = "resultData"></components>
  </div>
</template>

<script>
import SearchPage from './page/SearchPage.vue'
import ResultPage from './page/ResultPage.vue'

export default {
  name: 'App',
  data: function(){
    return{
      com:SearchPage,
      resultData:{}
    }
  },
  methods:{
    changeCom:function(data){
      console.log(data)
      if(data == 'reStart'){
        this.com =SearchPage;
        this.resultData=""
      }else{
        this.com =ResultPage;
        this.resultData = data
      }
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
