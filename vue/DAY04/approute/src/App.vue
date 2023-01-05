<template>
  <div id="app">
    <a href="#/zhaoliyin">赵丽颖</a>
    <a href="#/liushishi">刘诗诗</a>
    <a href="#/dilireba">迪丽热巴</a>

    <components :is="page"></components>
  </div>
</template>

<script>
import zhaoliyin from './components/zhao-liyin.vue'
import liushishi from './components/liu-shishi.vue'
import dilireba from './components/di-lireba.vue'

export default {
  name: 'App',
  data:function() {
    return {
      page:null
    }
  },mounted(){
    var pages = {
      zhaoliyin,liushishi,dilireba
    }
     window.addEventListener('hashchange',(e)=>{
      console.log(location.hash)
      console.log(e)
      console.log(pages)
      var str = location.hash.slice(2,location.hash.length)
      console.log(str)
      this.page = pages[str]
     })
     var str = location.hash.slice(2,location.hash.length)
     this.page = pages[str]
  },
  components: {
    zhaoliyin,liushishi,dilireba
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
