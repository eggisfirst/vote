<template>
  <div class="Showcase">
    <div class="item">
      <div class="content">
        <div class="pic"></div>
        <ul >
          <li class="clearfix">
            <h1 class="author">{{author}}</h1>
            <div class="voteBtn" v-on:click='getVote'>投票</div>
          </li>
          <li class="clearfix">
            <div class="number">编号<span>{{number}}</span></div>
            <div class="voteNum">票数<span>{{voteNum}}</span></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Showcase',
  data(){
    return{
      author:'作者',
      number:'666',
      voteNum : '666'
    }
  },
  methods : {
    //点击投票按钮,投票数增加，跳转到个人页面
    getVote : function(){
      this.voteNum ++
    }
    //aj把数据传进来，获得data里的变量
  },
  computed :{
    
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'PINGPANG';
    src: url('../font-family/HelveticaHv.ttf');
  }
  body{
    font-family: 'PINGPANG';
  }
.Showcase{
  width: 4.5066rem;
  padding-top: .32rem;
  .item{
    break-inside: avoid;   
  }
  .content{
  display: flex;
  background-color: #fff;
	border-radius: .1066rem;
  flex-direction: column;
  box-shadow: 0 0 0.133rem 0
    #e5e5e5;
   .pic{
     //上传的背景是变量
     background: url('../image/rank1.png') no-repeat center;
     background-size: 100%;
     width: 4.5066rem;
     height: 5rem;
     border: 1px solid red
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
