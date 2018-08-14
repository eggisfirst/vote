<template>
  <div class="Individualdisplay">
    <Banner/>
    
    <div class="wrapper">
      <div class="profile">
        <p>编号:&nbsp;{{mainParams.number[this.$route.params.name - 1]}}&nbsp;{{mainParams.author[this.$route.params.name - 1]}}</p>
        <hr>
        <ul class="clearfix">
          <li>
            <div>{{test}}</div>
            <p>总票数</p>
          </li>
          <li>
            <div>0</div>
            <p>当前排名</p>
          </li>
          <li>
            <div>0</div>
            <p>围观人数</p>
          </li>
        </ul>
      </div>
      <div class="works">
        <img :src="`${mainParams.pictureUrl[num -1 ]}`" alt="个人作品" v-for="i in o" :key='i'>
         
      </div> 
      <div class="describe">
        {{mainParams.pictureIntroduce}}
      </div>
      <button v-bind:class="`${btn}`" v-on:click ='votebtnClick'>{{btnTips}}</button>
    </div>
  </div>
 
</template>


<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Footer from "../components/Footer";
import Banner from "../components/Banner"


export default {
  components:{
    Banner
    },

  data(){
    return{
      btn:'vote_btn',
      btnTips:'为他投票',
      o:4,
      voteNum:'',
      num:'',
      zz:'',
      turn:true,
      test:0
     
    }
},
props:['mainParams'],
created(){//
// console.log(this.vote1)
// console.log(this.$route.params.name)
},
mounted(){
    //判断传进来是数字还是姓名
    // console.log(this.$route.params.name)
    this.num = this.$route.params.name
    console.log(this.num)
    // console.log(name)
    var xx = Number(this.num)
    this.zz =Boolean(xx)
    // console.log(this.zz)
      if(this.zz){//数字
      console.log('yes')      
    }else{//非数字
      console.log('no')
      console.log(this.$route.params.name)   
      this.$route.params.name = 1
      // console.log(this.$route.params.name)
      this.num = this.$route.params.name 
   }
  
 
 
},
methods:{
  votebtnClick(){
  
    if(this.turn){
      this.btn = 'vote_btn1'
      this.btnTips = '已投票'
      this.test +=1
      this.turn = false 
      this.$emit('transvotenum',this.test)
      return this.test
    }else{

    }
    
    
  
    
  }
}
}


</script>

<style lang="scss" scoped>
.Individualdisplay{
  width: 100%;
.wrapper{
  width: 9.36rem;
  margin: 0 auto;
  margin-top: .1866rem;
    .profile{
    background-color: #ffffff;
	  box-shadow: 0px 0px .133rem 0px 
		#e5e5e5;
    border-radius: .053rem;
    height: 2.666rem;
    margin-bottom: .333rem;
    >p{
      font-weight: bold;
      font-size: .4rem;
      line-height: .933rem;
      letter-spacing: 0px;
      color: #000;
      text-align: center;
    }
    hr{
      width: 8.8rem;
      margin: 0 auto;
      border: .0133rem solid #f0f0f0;
    }
    ul{
      width: 8.8rem;
      margin: 0 auto;
      height: 1.6rem;
      margin-top: .2rem;
      li{
        float: left;
        width: 2.9rem;
      >div{
        text-align: center;
        font-weight: bold;
        font-size: .48rem;
        line-height: .786rem;
        color: #ffb800;
      }
      >p{
        text-align: center;
      }      
      }
    }
    ul > li:nth-child(2) {
      border: 1px solid #f0f0f0;
      border-top: none;
      border-bottom: none;
    }
  }
  .works img{
    width: 100%;
    height: 5.6rem;
    border-radius: .053rem;
    margin-bottom: .133rem;
  }
  .describe{
    width: 9.36rem;
    height: 1.64rem;
    background-color: #f0f0f0;
	  border-radius: .053rem;
    padding: .586rem .32rem;
    box-sizing: border-box;
    overflow: auto;
   
  }
  .vote_btn{
    background-image: linear-gradient(0deg, 
		#ffb800 0%, 
		#fed363 100%), 
    linear-gradient(
      #ffdb7f, 
      #ffdb7f);
    background-blend-mode: normal, 
      normal;
    box-shadow: 0px .066rem .066rem 0px 
      #e5e5e5, 
      inset 0px .0266rem 0px 0px 
      rgba(255, 255, 255, 0.35);
    border-radius: .053rem;
    width: 3.466rem;
    height: 1.066rem;
    font-size: .32rem;
    font-weight: bold;
    line-height: .48rem;
    color: #000000;
    margin: .4rem 3rem 1rem;
  }
  .vote_btn1{
    background-color: #ccc;
    color: #666;
    width: 3.466rem;
    height: 1.066rem;
    font-size: .32rem;
    font-weight: bold;
    line-height: .48rem;
    box-shadow: 0px .066rem .066rem 0px 
      #e5e5e5, 
      inset 0px .0266rem 0px 0px 
      rgba(255, 255, 255, 0.35);
    border-radius: .053rem;
    margin: .4rem 3rem 1rem;
  }
}

}
</style>
