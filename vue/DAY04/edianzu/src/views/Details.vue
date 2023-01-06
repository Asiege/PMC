<template>
  <div class="about">
    <h1>这是详情</h1>
    <h3>{{ id.title }}</h3>
    <h3>{{ id.miniTitle }}</h3>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      id:{}
    }
  },
  created(){
    console.log(this.$route.params.id)
    let date = this.$route.params.id
      let httpUrl = 'https://m.edianyun.com/product/queryProductDetail?id='+date
      console.log(httpUrl)
      fetch(httpUrl)
      .then(res => res.json())
      .then(data=>{
        console.log(data)
        this.id = data.data
      })
  }
}
</script>