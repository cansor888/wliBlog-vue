<template>
  <div class="whitebg wenzi">
    <h2 class="htitle">猜你喜欢</h2>
    <ul>
      <li v-for="(item,index) in articles.slice(0,5)" :key="index">
        <a href="/">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import articles from "../../data/articles";
  import {getNew} from "../../api/font";
  export default {
    name: "FLike",
    data(){
      return{
        articles:[]
      }
    },
    mounted(){
      getNew().then(data=>{
        this.articles = data.list
      });
    }
  }
</script>

<style scoped>

</style>