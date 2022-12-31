<template>
  <div class="viewbox">
    <input type="button" value="重新算命" class="button" @click="reStart">
    <div class="title">
      <h2>五行查询</h2>
    </div>
    <div class="content">
      <div v-for="(value,key) in resultData['命主实体信息']" :key="key">
        <h3>{{key}}</h3>
        <p>{{ value }}</p>
      </div>
    </div>
    
  </div>
 
</template>
<script>
export default {
  props: ["resultData"],
  mounted: function () {
    console.log(this.resultData);
  },
     methods:{
         reStart:function(){
        this.$emit('changeComEvent','reStart')
         }
    }
}
</script>