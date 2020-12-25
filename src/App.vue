<template>
  <div id="app">
<!--    <add-blog></add-blog>-->
<!--    <blogs></blogs>-->
    <router-view></router-view>
  </div>

</template>

<script>
import addBlog from "./component/addBlog";
import Blogs from "./component/Blogs";
export default {
  components:{
    'add-blog' :addBlog,
    'blogs' : Blogs
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style>

</style>
