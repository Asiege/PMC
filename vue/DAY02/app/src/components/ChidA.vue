<template>
    <div>
        <h1>这是A组件</h1>
        <h5>这是接收B组件的消息:{{magA}}</h5>
    </div>
</template>

<script>
import eventBus from '../eventBus'
export default {
    data:function(){
        return{
            magA:''
        }
    },mounted(){
        eventBus.$on('magB',(data)=>{
            this.magA = data
        })
    }
            
    
}
</script>