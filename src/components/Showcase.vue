<template>
  <div class="Showcase" >
    <ul  v-for ="(i,index) in x" :key="index">
    <li class="item" >
      <div class="content">
        <router-link :to="{path:'/Individualdisplay/'+ mainParams.number[i-1]}"> 
          <img v-bind:src ="`./static/images/img${index + 1}.png`" alt="参赛作品">  
        </router-link>
        <ul >
          <li class="clearfix">
            <h1 class="author">{{mainParams.author[i-1]}}</h1> 
              <div v-bind:class="`${btn}`"  v-on:click='btnClick()'>{{btnTips}}</div>
          </li>
          <li class="clearfix">
            <div class="number">编号&nbsp;{{mainParams.number[i-1]}}<span></span></div>
            <div class="voteNum">票数&nbsp;<span>{{mainParams.voteNum[i - 1]}}</span></div>
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
      btnTips:'投票',
      btn:'voteBtn',
      test:0,
      turn:true,
      status:false,
      index:''    
      }
  },
  methods : {
    //点击投票按钮,投票数增加，跳转到个人页面
    btnClick:function(){  
    //  console.log(this.mainParams.authorN)
    //  console.log(this.key)
     
        this.btn = 'voteBtn1'
        this.btnTips = '已投票'   
        this.test += 1
        this.turn = false 
        this.$emit('transvotenum',this.test)
        return this.test 
    } 
  },
  computed :{
    
  },
  props:[
    'mainParams','vote1'
  ],
  created(){//获取数量
    // console.log(this.mainParams.authorN[0].status)
    this.x = this.mainParams.authorN.length
    // console.log(this.key)
  }
}
</script>

<style lang="scss" scoped>
.Showcase{
  width: 100%;
  margin-bottom: 0.34rem;
  column-count: 2;
  column-width: 4.5066rem;
  justify-content: space-between;
  margin-bottom: 2rem;
  .content{
    width:4.5066rem;
    background-color: #fff;
    border-radius: .1066rem;
    break-inside: avoid;
    display: inline-block;
    box-shadow: 0 0 0.133rem 0
      #e5e5e5;
    margin-top: 0.32rem;
    display: inline-block;
   img{
     //上传的背景是变量 
     width: 4.5066rem;
     border: none;
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
      height: .5rem;
      background-color: #ffdb7f;
      border-radius: .053rem;
      text-align: center;
      font-size: .24rem;
      line-height: .5rem;
      color: #000;
      display: inline-block;
      vertical-align: middle;
     
    }
    .voteBtn1{
      float: right;
      width:1.24rem;
      height: .5rem;
      background-color:  #ccc;
      border-radius: .053rem;
      text-align: center;
      font-size: .24rem;
      line-height: .5rem;
      color: #666;
       display: inline-block;
       vertical-align: middle;
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
