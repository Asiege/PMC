<template>
    <div>
        <h1>名字{{ name }}</h1>
        <h3>性别{{ gender }}</h3>
    </div>
    
</template>

<script>
    export default{
        props:['name','gender']
        ,methods:{
            fn:function(){
                console.log(this)
                this.$emit('changeNum',1000)
            }
        }
    }        
</script>