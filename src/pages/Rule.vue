<template>
  <div class="rule">
   <Banner/>
   
   <div class="wrapper">
     <Count v-bind:mainParams="mainParams"/>
     <div class="activeRule">
       <div class="backgroundPicture"></div>
       <h1>活动规则</h1>
       <div class="content">
         <ul>
           <li v-for="i in p" :key='i'>1.活动规则活动规则活动规则活动规则活动</li>
         </ul>
       </div>
     </div>
     <div class="awards">
       <h2>奖项设置</h2>
       <hr>
       <div class="content ">
       <ul>
         <li v-for='i in t' :key='i'>5.活动规则活动规则活动规则活动规则活动</li>
       </ul>
       </div>
     </div>
     <Footer/>
   </div>
   
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Banner from "../components/Banner";
import Count from "../components/Count";
import Footer from "../components/Footer"

export default {
  components:{
    Banner,
    Count,
    Footer
  },
  data(){
    return{
      p:7,
      t:5
    }
  },
  props:['mainParams']
}
</script>


<style lang="scss" scoped>
.wrapper{
  width: 9.36rem;
  margin: 0 auto;
  margin-top: 0.1866rem;
  .activeRule{
    width: 100%;
    margin-top: .4rem;
    position: relative;
    .backgroundPicture{
    background : url('../image/title.png') no-repeat center;
    background-size: 100%;
    height: .64rem;
   
    }
    h1{
      line-height: .64rem;
      text-align: center;  
      font-weight: bold;
      position: absolute;
      top: 0;
      left: 4.05rem;
    }
    .content{
      font-size: .32rem;
      line-height: .48rem;
      color: #555555;
     ul{
       padding: 0.35rem 0.5rem;
     }
    }
  }
  .awards{
    width: 100%;
    height: 2rem;
    margin-top: -0.2rem;
    margin-bottom: 2rem;
    h2{
      text-align: center;
      font-size: .32rem;
      line-height: .93rem;     
      color: #000000;
      font-weight: bold;
    }
    hr{
      width: 2rem;
      border: .04rem solid #ffb800;
      margin: 0 auto;
      margin-top: -0.2rem
    }
   .content{
      font-size: .32rem;
      line-height: .48rem;
      color: #555555;
     ul{
       padding: 0.35rem 0.5rem;
     }
    } 
  }
}






</style>

