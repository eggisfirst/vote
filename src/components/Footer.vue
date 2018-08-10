<template>
  <div class="Footer">
  <ul class="clearfix">
    <li >    
      <router-link to="/" > 
      <div class='iconHome'></div>
      <p>首页</p>
      </router-link>
    </li>
    <li >  
      <router-link to="/Rank" >
      <div class="iconRank"></div>
      <p>排行</p>  
      </router-link>
    </li>
    <li >
      <router-link to="/Rule" >
       <div class="iconRegulation" ></div>
      <p>规则</p>
      
      </router-link>
    </li>
  </ul>
  </div>
</template>
<script>


export default {
  data(){
    return{
    }
  },
  methods:{

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
          color: #000000;
        }
        a{
          text-decoration-line: none
        }
      }
    }
      .router-link-active .iconHome{
        background: url("../image/home2.png") no-repeat center;
        background-size: 100%;
        width: 100%;
        height: .5333rem;
      }
      .router-link-active .iconRank{
        background: url("../image/rank2.png") no-repeat center;
        background-size: 100%;
        width: 100%;
        height: .5333rem;
      } 
      .router-link-active .iconRegulation{
        background: url("../image/regulation2.png") no-repeat center;
        background-size: 100%;
        width: 100%;
        height: .5333rem;
      }
       
}









</style>

