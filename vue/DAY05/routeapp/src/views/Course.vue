<template>
  <div class="about">
    <div class="content">
      <div class="left">
        <router-link to="/">ps教程</router-link> 
        <router-link to="/">前端教程</router-link>
        <router-link to="/">java教程</router-link>
      </div>
      <div class="right">
        <router-link to="/">内容</router-link> 
      </div>
    </div>

  </div>
  
</template>

<style>
.content{
  display: flex;
}
.left{
  width: 30vw;
  height: 60vh;
  flex-direction: column;
  display: flex;
  border: 1px solid #000;
}
.right{
  flex: 1;
  border: 1px solid #000;
}
</style>
