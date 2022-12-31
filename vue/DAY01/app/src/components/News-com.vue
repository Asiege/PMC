<template>
    <div>
        <h1>这是标题:{{title}}</h1>
        <h5>这是作者:{{anthor}}</h5>
        <P>这是内容:{{content}}</P>
   </div>
</template>
<script>
export default {
    props:["title","anthor","content"]
}
</script>