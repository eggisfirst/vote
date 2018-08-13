<template>
  <div class="Count">
     <div class="count" >
        <ul class="clearfix">
          <li>
            <ol>
              <li></li>
              <li>参赛数</li>
              <li id="">{{mainParams.peopleAllNum}}</li>
            </ol>
          </li>
          <li>
            <ol>
              <li></li>
              <li>投票数</li>
              <li id="">{{mainParams.voteAllNum}}</li>
            </ol>
          </li>
          <li>
            <ol>
              <li></li>
              <li>访问量</li>
              <li id="">{{mainParams.visitAllNum}}</li>
            </ol>
          </li>
        </ul>
        <hr>
        <div class="deadline clearfix">
          <div class="icon-time"></div>
          <p>活动截止日期：<span>2018年8月17日12：00 p.m结束</span></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:['mainParams'],
  computed:{
      
    }
}
</script>

<style lang="scss" scoped> 
@font-face{
  font-family: "PINGPANGM";
  src: url("../font-family/PingFang Medium.ttf");
}
html{
  font-family: "PINGPANGM";
}
.count {
    width: 100%;
    height: 3.333rem;
    background-color: #fff;
    box-shadow: 0 0 0.133rem 0 #e5e5e5;
    border-radius: 0.0533rem;
    ul > li {
      width: 3.12rem;
      height: 1.6rem;
      float: left;
      box-sizing: border-box;
      margin: 0.4rem 0;
      text-align: center;
    }
    ul > li:nth-child(2) {
      border: 1px solid #f0f0f0;
      border-top: none;
      border-bottom: none;
    }
    ol > li:nth-child(1) {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      margin: 0 auto;
    }
    ul > li:nth-child(1) > ol > li:nth-child(1) {
      background-color: #fe0000;
    }
    ul > li:nth-child(2) > ol > li:nth-child(1) {
      background-color: #ffb800;
    }
    ul > li:nth-child(3) > ol > li:nth-child(1) {
      background-color: #50abfd;
    }
    ul ol > li:nth-child(2) {
      font-size: 0.4266rem;
      color: #4d4d4d;
      line-height: 0.7866rem;
    }
    ul ol > li:nth-child(3) {
      font-size: 0.32rem;
      color: #909090;
      line-height: 0.7866rem;
    }
    hr {
      width: 8.8rem;
      margin: 0 auto;
      border: 0.5px solid #f0f0f0;
    }
    .deadline {
      width: 8.8rem;
      margin: 0 auto;
      .icon-time {
        background: url("../image/time.png") no-repeat center;
        background-size: 100%;
        width: 0.4266rem;
        height: 0.4266rem;
        float: left;
        margin-top: 0.2533rem;
        margin-right: 0.2266rem;
      }
      p {
        line-height: 0.933rem;
        color: #909090;
        font-size: 0.32rem;
      }
      span {
        color: #fe0000;
      }
    }
   
  }
</style>
