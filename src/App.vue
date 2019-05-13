<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld> {{msg}}</HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NewBook from './components/NewBook.vue'
import BookList from './components/BookList.vue'
import axios from 'axios'// run on local host: 9000 
//create book list and a separate profile


export default {
  name: 'app',
  components: {
    HelloWorld,
    BookList,
    NewBook
  },
  data() {
    return {
      todo: [
        {
          id: 1,
          title: Zippy,
          completed: true
        }
      ]
    }
    
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
