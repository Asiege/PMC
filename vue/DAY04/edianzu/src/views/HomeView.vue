<template>
  <div class="home">
    <ul>
        <li v-for="item in price " :key = 'item.productId'>
          <router-link :to="'/wap/product/'+item.productId">
          {{ item.title }}
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data:function(){
    return{
      price:{}
    }
  },
  beforeCreate(){
      let httpUrl = 'https://m.edianyun.com/product/queryIndexContent?isnToLoginPage=true'
      fetch(httpUrl)
      .then(res => res.json())
      .then(data=>{
        console.log(data)
        this.price = data.data.hotModel
      })
  }
}
</script>
