import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import Routers from "./routers";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routers,
  mode: 'history'
});


Vue.directive('rainbow' , {
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
