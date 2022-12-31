<template>
    <div id="app">
    <h1>新闻</h1>
      <Header></Header>
      <MainContent></MainContent>
      <NewsCom v-for="(news,index) in newsList" :title="news.title" :anthor="news.anthor" :content="news.content" :key="index"></NewsCom>
      <!-- <Footer></Footer> -->
    </div>
  </template>
  <script>
  import Header from '../components/Header'
  import MainContent from '../components/Main-content'
  // import Footer from '../components/Footer'
  import NewsCom from '../components/News-com'

  export default {
    data: function () {
    return {
      newsList:[
    {
      title:'1、v-for循环普通数组',
      anthor:'①创建vue对象',
      content:'② 循环数据'
    },
    {
      title:'2、v-for循环对象数组',
      anthor:'① 创建vue实例对象',
      content:'② 循环对象数组'
    }
      ]
    }
  },
    components: {
        Header,MainContent,NewsCom
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
  