<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ $route.fullPath }}</h3>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this)
  }
}
</script>