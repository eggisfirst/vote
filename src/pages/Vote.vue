<template>
  <div class="Vote">
    <Banner/>
    <div class="wrapper">
      <Count v-bind:mainParams="mainParams"/>
      <Search class="search"/>
      <div class="works">
        <Showcase v-bind:mainParams="mainParams"/>
      </div>
      <Footer/>
    </div> 
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
// import axios from 'axios'
import Search from "../components/Search";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Count from "../components/Count";

export default {
  components: {
    Search,
    Showcase,
    Footer,
    Banner,
    Count
  },
  data() {
    return{
      // peopleNum : '',
      // allVoteNum :' ',
      // visitedNme : '',
    
     
    }
  },
  created(){
    this.getVote()
  },
  computed: {
    //监听参赛数 投票数 访问量的变化
  },
  methods: {
    getVote(){
    }
  },
  props:[
    "mainParams"
  ]
}
</script>

<style lang = 'scss' scoped>
.wrapper {
  width: 9.36rem;
  margin: 0 auto;
  margin-top: 0.1866rem;
 .works{
   width: 100%;

 }
 .search{
   position: relative;
 }

 
}
</style>
