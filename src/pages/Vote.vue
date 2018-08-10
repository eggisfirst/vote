<template>
  <div class="Vote">
    <Banner/>
    <div class="wrapper">
      <Count/>
      <Search/>
      <div class="works">
        <Showcase v-for ="i in n"/> 
      </div>
      <Footer/>
    </div>
    
  </div>
</template>


<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../components/Search";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Count from "../components/Count"

export default {
  components: {
    Search,
    Showcase,
    Footer,
    Banner,
    Count
  },
  data() {
    return {
      // peopleNum : '',
      // allVoteNum :' ',
      // visitedNme : '',
      n:20,
      p:[
        {
          name:'xiaohuang',
          num:1,
          work:"../image/rank1.png",
          intruduce:"hello1"
        },
        {
          name:'xiaohuang',
          num:2,
          work:"../image/bg.png",
          intruduce:"hello2"
        },
        {
          name:'xiaohuang',
          num:3,
          work:"../image/rank1.png",
          intruduce:"hello3"
        },
        {
          name:'xiaohuang',
          num:4,
          work:"../image/bg.png",
          intruduce:"hello4"
        }
      ]
    }
  },
  props:['p'],
  computed: {
    //监听参赛数 投票数 访问量的变化
  },
  mothods: {}
};
</script>

<style lang = 'scss' scoped>
@font-face {
  font-family: "PINGPANG";
  src: url("../font-family/HelveticaHv.ttf");
}
body {
  font-family: "PINGPANG";
}
.wrapper {
  width: 9.36rem;
  margin: 0 auto;
  margin-top: 0.1866rem;
 .works{
   width: 100%;
   column-count: 2;
   margin-bottom: 1.5rem;
 }
}
</style>
