<template>
  <div id="app">
    <StudentName>
      <h2>东西1</h2>
      <h2>东西2</h2>
    </StudentName>
    <bei-tai>备胎</bei-tai>
  </div>
</template>

<script>
import StudentName from './components/StudentName'
import BeiTai from './components/BeiTai'


export default {
  name: 'App',
  components: {
    StudentName,BeiTai
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
