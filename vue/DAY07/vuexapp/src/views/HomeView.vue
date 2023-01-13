<template>
  <div class="home">
    <h1>地区：{{ $store.state.msgs }}</h1>
    <input type="text" placeholder="输入IP" v-model="ip">
    <button @click="getip">提交</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return {
      ip:'',
    }
  },
  mounted(){
    console.log(this)
  },
  methods:{
    getip(){
      this.$store.dispatch('getAddr',this.ip)
    }
  }
}
</script>
