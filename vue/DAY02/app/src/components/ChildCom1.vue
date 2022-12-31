<template>
    <div>
        <h5>年龄:{{ ages }}</h5>
        <button @click="fn">点击修改年龄</button>
    </div>
    
</template>

<script>
    export default{
        // data:function(){
        //     return{
        //         num:0
        //     }
        // },
        props:['ages',"num"]
        ,
        methods:{
            fn:function(){
                this.$emit('changeNum',this.num)
            }
        }
    }        
</script>