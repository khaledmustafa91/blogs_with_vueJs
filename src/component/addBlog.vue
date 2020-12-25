<template>
  <div class="" id="add-blog">

    <div class="backImage"></div>
    <div class="content">
      <h2> Add a new blog </h2>
      <div v-if="!submitted" class="col-lg-12 formContent">
        <form>
          <div class="form-group">
            <label for="title">Blog title</label>
            <input ref="title" v-model.lazy="blog.title" type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title">
          </div>
          <div class="form-group">
            <label for="Content">Content</label>
            <textarea ref="content" v-model.lazy="blog.content" type="text" class="form-control" id="Content" placeholder="Your content"></textarea>
          </div>
          <div class="form-check">

            <input v-model="blog.categories" value="web design" type="checkbox" class="form-check-input" id="exampleCheck4">
            <label class="form-check-label" for="exampleCheck4">web design</label>

            <input v-model="blog.categories" value="web development" type="checkbox" class="form-check-input" id="exampleCheck3">
            <label class="form-check-label" for="exampleCheck3">web development</label>

            <input v-model="blog.categories" value="Algorithms" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Algorithms</label>

            <br>
            <input v-model="blog.categories" value="programming" type="checkbox" class="form-check-input" id="exampleCheck2">
            <label class="form-check-label" for="exampleCheck2">programming</label>


            <input v-model="blog.categories" value="cook" type="checkbox" class="form-check-input" id="exampleCheck5">
            <label class="form-check-label" for="exampleCheck5">cook</label>


          </div>

          <button v-on:click.prevent="post" type="submit" class="btn btn-primary">Add blog</button>
          <button v-on:click.prevent="clear" type="submit" class="btn btn-primary">clear</button>


        </form>
      </div>
      <div v-if="submitted" class="previewContent">
          <h4>Thanks for adding your blog</h4>
        <div class="preview">
          <h5> {{blog.title}}</h5>
          <article> {{ blog.content }} </article>
          <ul>
    <!--        <li v-for="cataogry in blog.categories">-->
    <!--          {{cataogry}}-->
    <!--        </li>-->
          </ul>
          <div v-for="cataogry in blog.categories" class="box">
            <p class="cataogry">{{ cataogry }}</p>
          </div>
        </div>

<!--        <router-link to="/add">-->
<!--          <button v-on:click="changeSubmit" type="submit" class="btn btn-primary">Back</button>-->
<!--        </router-link>-->
        <router-link to="/">
          <button v-on:click="" type="submit" class="btn btn-primary">List of blogs</button>
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
      blog : {
        title:"",
        content:"",
        categories:[]
      },
      submitted: false
    }
  },
  methods:{
    clear: function (){
      this.$refs['title'].value ="";
      this.$refs['content'].value ="";

    },
    post: function (){
      this.$http.post('https://blogs-e5645-default-rtdb.firebaseio.com/posts.json' , this.blog).then(function (data){
        this.submitted = true;
      });
    },
    changeSubmit: function (){
      this.submitted = false;

    }
  },
  beforeUpdate() {
    this.$refs['title'].value ="";
    this.$refs['content'].value ="";
    this.title = "";
    this.content = "";
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;600&display=swap');
*{
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
}
article{
  font-weight: 400;
}

.formContent{
  background: white;
  padding: 25px;
  border-radius: 1%;
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
  margin: 30px auto;
  max-width: 500px;
  background-color: white;
  position: relative;
  border-radius: 1%;
}
textarea{
  resize: none;
  height: 200px;
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
/*.form-control{*/
/*  width: 50%;*/
/*}*/
.btn{
  margin-top: 20px;
}
.preview{
  max-width: 600px;
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
.previewContent{
  position: relative;
  background-color: white;
  padding: 25px;
  overflow: auto;
  max-height: 520px;
}
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='checkbox'], input[type='radio'] {
    --active: #275efe;
    --active-inner: #fff;
    --focus: 2px rgba(39, 94, 254, .3);
    --border: #bbc1e1;
    --border-hover: #275efe;
    --background: #fff;
    --disabled: #f6f8ff;
    --disabled-inner: #e1e6f9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }
  input[type='checkbox']:after, input[type='radio']:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
  }
  input[type='checkbox']:checked, input[type='radio']:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  input[type='checkbox']:disabled, input[type='radio']:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
  }
  input[type='checkbox']:disabled:checked, input[type='radio']:disabled:checked {
    --b: var(--disabled-inner);
    --bc: var(--border);
  }
  input[type='checkbox']:disabled + label, input[type='radio']:disabled + label {
    cursor: not-allowed;
  }
  input[type='checkbox']:hover:not(:checked):not(:disabled), input[type='radio']:hover:not(:checked):not(:disabled) {
    --bc: var(--border-hover);
  }
  input[type='checkbox']:focus, input[type='radio']:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  input[type='checkbox']:not(.switch), input[type='radio']:not(.switch) {
    width: 21px;
  }
  input[type='checkbox']:not(.switch):after, input[type='radio']:not(.switch):after {
    opacity: var(--o, 0);
  }
  input[type='checkbox']:not(.switch):checked, input[type='radio']:not(.switch):checked {
    --o: 1;
  }
  input[type='checkbox'] + label, input[type='radio'] + label {
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }
  input[type='checkbox']:not(.switch) {
    border-radius: 7px;
  }
  input[type='checkbox']:not(.switch):after {
    width: 5px;
    height: 9px;
    border: 2px solid var(--active-inner);
    border-top: 0;
    border-left: 0;
    left: 7px;
    top: 4px;
    transform: rotate(var(--r, 20deg));
  }
  input[type='checkbox']:not(.switch):checked {
    --r: 43deg;
  }
  input[type='checkbox'].switch {
    width: 38px;
    border-radius: 11px;
  }
  input[type='checkbox'].switch:after {
    left: 2px;
    top: 2px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
  }
  input[type='checkbox'].switch:checked {
    --ab: var(--active-inner);
    --x: 17px;
  }
  input[type='checkbox'].switch:disabled:not(:checked):after {
    opacity: 0.6;
  }
  input[type='radio'] {
    border-radius: 50%;
  }
  input[type='radio']:after {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: var(--active-inner);
    opacity: 0;
    transform: scale(var(--s, 0.7));
  }
  input[type='radio']:checked {
    --s: 0.5;
  }
}
ul {
  margin: 12px;
  padding: 0;
  width: 100%;
  max-width: 320px;
}
ul li {
  margin: 16px 0;
  position: relative;
}
</style>
