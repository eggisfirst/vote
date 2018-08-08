<template>
  <div class="Vote">
    <div class="banner">
      背景图片
    </div>
    <div class="wrapper">
      <div class="count">
        <ul class="clearfix">
          <li>
            <ol>
              <li></li>
              <li>参赛数</li>
              <li id="">66666</li>
            </ol>
          </li>
          <li>
            <ol>
              <li></li>
              <li>投票数</li>
              <li id="">66666</li>
            </ol>
          </li>
          <li>
            <ol>
              <li></li>
              <li>访问量</li>
              <li id="">66666</li>
            </ol>
          </li>
        </ul>
        <hr>
        <div class="deadline">
          <div class="icon-time"></div>
          <p>活动截止日期：2018年8月17日12：00 p.m结束</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from 'vue'
import VueRouter from 'vue-router'




export default {
  
}
</script>

<style lang = 'scss'>
  @font-face {
    font-family: PINGPANG;
    src: url(../font-family/HelveticaHv.ttf);
  }
  html{
    font-family: PINGPANG;
  }
  .banner{
    width:10rem;
    height: 5.87rem;
    border: 1px solid red;
    box-sizing: border-box;
  }
  .wrapper{
    width: 9.36rem;
    margin: 0 auto;
    margin-top: 0.1866rem;
     .count{
       width: 100%;
       height: 3.333rem;
       background-color: #fff;
       box-shadow: 0px 0px 10px 0px 
        #e5e5e5;
       border-radius: 0.0533REM;
       ul>li{
        width: 3.12rem;
        height: 1.6rem;
        float: left;
        box-sizing: border-box;
        margin:0.4rem 0 ;
        text-align: center;
       }
       ul>li:nth-child(2){
        border: 1px solid #f0f0f0;
        border-top: none;
        border-bottom: none
       }
       ol>li:nth-child(1){
         width: 4px;
         height: 4px;
         border-radius: 100%;
         margin: 0 auto;
        
       }
      ul>li:nth-child(1)>ol>li:nth-child(1){
         background-color: #fe0000;
       }
       ul>li:nth-child(2)>ol>li:nth-child(1){
         background-color: #ffb800;
       }
       ul>li:nth-child(3)>ol>li:nth-child(1){
         background-color: #50abfd;
       }
       ul ol>li:nth-child(2){
         font-size: 0.4266rem;
         color: #4d4d4d;
         line-height: 0.7866rem;
       }
       ul ol>li:nth-child(3){
         font-size: 0.32rem;
         color: #909090;
         line-height: 0.7866rem;
       }
       hr{
         width: 8.8rem;
         margin: 0 auto;
         border: 0.5px solid #f0f0f0
       }
     }
  }
</style>
