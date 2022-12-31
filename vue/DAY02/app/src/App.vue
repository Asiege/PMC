<template>
  <div id="app">
    <!-- <child-com v-for="star in stars" :key="star.id" :name = "star.name" :gender="star.gender" ></child-com> -->
    <!-- <child-com1 v-for='star in stars' :ages="star.ages" :key="star.id" :num='num' @changeNum = 'changefn'></child-com1> -->
    <chid-a></chid-a>
    <chid-b></chid-b>
  </div> 
</template>

<script>
import ChildCom from './components/ChildCom.vue'
import ChildCom1 from './components/ChildCom1.vue'
import ChidB from './components/ChidB.vue'
import ChidA from './components/ChidA.vue'

export default {
  name: 'App',
  data:function(){
    return{
      stars:[{
        id:'001',
        name:'郭德纲',
        gender:'男',
        ages:2
      },{
        id:'002',
        name:'郭德纲2',
        gender:'女',
        ages:4
      },{
        id:'003',
        name:'郭德纲3',
        gender:'男',
        ages:24
      }],num:0
    }
  },
  components: {
    ChildCom,ChildCom1,ChidB,ChidA
  },
  methods:{
    changefn:function(date){
      console.log(this)
      this.stars[0].ages += date
      // for(let i = 0,i>stars[i])
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
