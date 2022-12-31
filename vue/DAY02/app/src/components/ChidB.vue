<template>
    <div>
        <h1>这是B组件</h1>
        <h5>这是接收A组件的消息{{magB}}</h5>
        <button @click = 'fn'>发送消息到A组件</button>
    </div>
</template>

<script>
import eventBus from '../eventBus'
export default {
    data:function(){
        return{
            magB:''
        }
    },methods:{
        fn:function(){
            eventBus.$emit('magB',"发送A组消息")
        }
    }
}
</script>