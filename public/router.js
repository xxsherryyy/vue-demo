import Vue from "vue"; 
import Router from "vue-router";
import NewBook from './components/NewBook.vue';
import BookList from './components/BookList.vue';

Vue.use(Router); 
 
const router = new Router({ 
  mode: "history", 
  routes: [ 
    { 
      path: "/index.html", 
      redirect: { name: "home" } 
    },
    { 
        path: "/", 
        name: "home", 
        component: Home 
      },
    {
        path: "/newbook",
        name: "newBook",
        component: NewBook
    },
    {
        path: "/booklist",
        name: "bookList",
        component: BookList
    }
  ]
});

export default router; 