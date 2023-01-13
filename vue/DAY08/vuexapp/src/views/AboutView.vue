<template>
  <div class="about">
    <!-- <h1 v-for="item,i in $store.getters.low" :key="i">{{ item }}</h1> -->
    <h1>user:{{ $store.state.userModule.user }}</h1>
    <h1>user:{{ $store.getters.description }}</h1>
    <button @click="changeUser">setUser数据</button>
    <button @click="asyncSer">asyncSer数据</button>
    <h1>用辅助输出:{{ description }}</h1>
    <h1>获取普通属性：{{ num2 }}</h1>
    <h1>命名空间</h1>
    <h1>命名空间A属性：{{ $store.state.mallModule.a}}</h1>
    <h1>命名空间A属性：{{ $store.state.mallModule.b}}</h1>
    <h1>命名空间A属性：{{ $store.getters['mallModule/description']}}</h1>
    <button @click="changeMall">Mall的setUser数据</button>
    <button @click="asyncMall">Mall的setType数据</button>
    <h1>user:{{ userModule.user}}</h1>
    <h1>user:{{ mallModule.a}}</h1>
    <h1>mall的description{{ malldes }}</h1>
    <button @click="setUser('淘宝')">setUser</button>
    <button @click="asyncSetType('软件')">asyncSetType</button>
  </div>
</template>

<script>
import { mapGetters,mapState,mapMutations,mapActions } from 'vuex';

export default {
  mounted(){
    console.log(this)
  },computed:{
    ...mapGetters([
      'description',
    ]),
    ...mapState({
      num2:'num'
    }),
    ...mapState(['userModule', 'mallModule']),
    ...mapGetters('mallModule',{
      'malldes':'description'
    })
  },
  methods:{
    changeUser(){
      this.$store.commit('setUser',"冥界不冥界")
    },
    asyncSer(){
      this.$store.dispatch("asyncSetType",'codeVS')
    },
    changeMall(){
      this.$store.commit("mallModule/setUser","oppo")
    },
    asyncMall(){
      this.$store.dispatch("mallModule/asyncSetType","平台")
    },
    ...mapMutations('mallModule',['setUser','setType']),
    ...mapActions('mallModule',['asyncSetType'])
  }
  
}
</script>
 