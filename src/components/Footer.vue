<template>
  <div class="Footer">
  <ul class="clearfix">
    <li >
      <div v-bind:class="`${home}`" v-on:click="homeClick()"></div>
      <p>首页</p>
    </li>
    <li >
      <div v-bind:class="`${rank}`" v-on:click="rankClick"></div>
      <p>排行</p>
    </li>
    <li >
      <div v-bind:class="`${regulation}`" v-on:click="regulationClick"></div>
      <p>规则</p>
    </li>
  </ul>
  </div>
</template>
<script>


export default {
  name:'Footer',
  data(){
    return{
      home:'iconHome',
      rank:'iconRank',
      regulation:'iconRegulation'
    }
  },
  methods:{
    homeClick : function(){
      this.home = 'iconHome'
      this.rank = 'iconRank'
      this.regulation = 'iconRegulation'
      
    },
    rankClick : function(){
      this.rank = 'iconRank1'
      this.home = 'iconHome1'
      this.regulation = 'iconRegulation'
     
    },
    regulationClick : function(){ 
      this.regulation = 'iconRegulation1'
      this.home = 'iconHome1'
      this.rank = 'iconRank'
    }

  }
}
</script>

<style lang="scss" scoped>
.Footer{
  width: 100%;
  height: 1.30666rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
	box-shadow: 0px 0px 0.133rem 0px 
    #e5e5e5;
    ul{
      width: 7.52rem;
      height: 100%;
      margin: 0 auto;
      li{
        padding: .1866rem 0;
        float: left;  
        width: .8666rem;
        height: 100%;
        margin-right: 2.46rem;
        &:nth-child(3){
          margin-right: 0
        }
        .iconHome{
          background: url("../image/home2.png") no-repeat center;
          background-size: 100%;
          width: 100%;
          height: .5333rem;
        }
         .iconHome1{
          background: url("../image/home1.png") no-repeat center;
          background-size: 100%;
          width: 100%;
          height: .5333rem;
        }
        
        .iconRank{
          background: url("../image/rank1.png") no-repeat center;
          background-size: 100%;
          width: 100%;
          height: .5333rem;
        }
        .iconRegulation{
          background: url("../image/regulation1.png") no-repeat center;
          background-size: 100%;
          width: 100%;
          height: .5333rem;
        }
        p{
          font-size: .24rem;
          text-align: center;
          margin-top: .14rem;
        }
      }
    }
       
        .iconRank1{
          background: url("../image/rank2.png") no-repeat center;
          background-size: 100%;
          width: 100%;
          height: .5333rem;
        }
        .iconRegulation1{
          background: url("../image/regulation2.png") no-repeat center;
          background-size: 100%;
          width: 100%;
          height: .5333rem;
        }

}









</style>

