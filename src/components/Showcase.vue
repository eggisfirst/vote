<template>
  <div class="Showcase">
    <ul>
    <li class="item"  v-for ="i in n" :key="i">
      <div class="content">
        <div class="pic">
          <img v-bind:src ="`${mainParams.pictureUrl[i-1]}`" alt="参赛作品">  
        </div>
        <ul >
          <li class="clearfix">
            <h1 class="author">{{mainParams.author[i-1]}}</h1>
            <router-link :to="{path:'/Individualdisplay/'+mainParams.number[i-1]}" > 
              <div class="voteBtn" v-on:click='btnClick()'>投票</div>
            </router-link>
          </li>
          <li class="clearfix">
            <div class="number">编号&nbsp;{{mainParams.number[i-1]}}<span></span></div>
            <div class="voteNum">票数&nbsp;<span>{{mainParams.vote1}}</span></div>
          </li>
        </ul>
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      author:'作者',
      number:'666',
      voteNum : '666',
       n:9,
       message:'hello'
      
      }
  },
  methods : {
    //点击投票按钮,投票数增加，跳转到个人页面
    btnClick:function(){
     
   
      
    }
    
  },
  computed :{
    
  },
  props:[
    'mainParams','vote1'
  ]
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'PINGPANG';
    src: url('../font-family/HelveticaHv.ttf');
  }
  body{
    font-family: 'PINGPANG';
  }
.Showcase{
  width: 4.5066rem;
  .item{
    break-inside: avoid;   
     margin-bottom: 0.34rem;
     
  }
  .content{
  display: flex;
  background-color: #fff;
	border-radius: .1066rem;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0 0 0.133rem 0
    #e5e5e5;
   .pic img{
     //上传的背景是变量 
     width: 4.5066rem;
   }
   ul{
    width: 4rem;
    height: 1.173rem;
    margin: 0.32rem 0.253rem; 
    .author{
      line-height: .48rem;
      font-size: .32rem;
      font-weight: bold;
      float: left;
    }
    .voteBtn{
      float: right;
      width:1.24rem;
      height: .48rem;
      background-color: #ffdb7f;
      border-radius: .053REM;
      text-align: center;
      font-size: .24rem;
      line-height: .48rem;
      color: #000;
    }
    a{
      text-decoration-line: none
    }
    .number{
      color: #333333;
      float: left;
      font-size: .2933rem;
      line-height: .93rem
    }
    .voteNum{
      font-size: .2933rem;
      float: right;
      line-height: .93rem;
      color: #333333
    }
    }
   } 
}







</style>
