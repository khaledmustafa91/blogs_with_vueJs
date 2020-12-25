<template>
  <div class="" id="add-blog">

    <div class="backImage"></div>
    <div class="content">
      <h2> List of blogs </h2>
      <input type="text" v-model="search" class="form-control" placeholder="search for blog">
      <div class="previewContent">
        <div v-for="blog in filterBlog" class="preview">
          <router-link v-bind:to="'/blog/' + blog.id"><h5>{{ blog.title }}</h5></router-link>
          <article> {{ blog.content }} </article>
          <div v-for="cataogry in blog.categories" class="box">
            <p class="cataogry">{{ cataogry }}</p>
          </div>
        </div>
        <router-link to="/add">
          <button v-on:click="" type="submit" class="btn btn-primary">Add blog</button>
        </router-link>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "addBlog",
  data()
  {
    return {
      blogs : [],
      search :''

    }
  },
  methods:{

  },
  created() {
    this.$http.get('https://blogs-e5645-default-rtdb.firebaseio.com/posts.json' ).then(function (data){
      return data.json();
    }).then(function (data){
      var blogsArray = [];
      for (let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    });
  },
  computed:{
    filterBlog:function (){
      return this.blogs.filter( (blog) => {
        return blog.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }

}
</script>

<style scoped>

::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #0062cc;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255,0,0,0.4);
}

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;600&display=swap');
*{
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
}
article{
  font-weight: 400;
}
.backImage{
  width: 100%;
  height: 110%;
  background-image: url("../assets/img/3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  margin-top: -61px;
}
.content h2{
  padding: 15px;
}
.content{
  overflow: auto;
  margin: 30px auto;
  max-width: 850px;
  max-height: 575px;
  background-color: white;
  position: relative;
  border-radius: 1%;
}
.btn{
  margin-top: 20px;
}
.preview{
  max-width: 850px;
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
.previewContent{
  position: relative;
  background-color: white;
  padding: 21px;
}
input{
  width: 65%;
  margin: 0 auto;
}
.box{
  text-align: center;
  border: white solid 2px;
  max-width: 250px;
  padding: 10px 10px 0px 10px;
  display: inline-block;
  margin-right: 10px;
  background-color: #f7f7f8;
  font-size: 12px;
}
.box p{
  font-width: 200;
}
.cataogry:hover{
  color: #2b6dad;
}
</style>
