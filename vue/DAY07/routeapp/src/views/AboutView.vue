<template>
  <div class="about">
    <h1 v-for="item,i in keys" :key="i">这是ABOUT第{{ i }}行</h1>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      keys:new Array(100)
    }
  }
}
</script>
