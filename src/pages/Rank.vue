<template>
  <div class="Rank">
    <div class="banner"></div>
    <div class="Billboard">
      <table>
        <tr>
          <th>排名</th>
          <th>名称</th>
          <th>票数</th>
          <th>编号</th>
        </tr> 
        <tr v-for="i in numOfPartipants" :key='i'>
          <td>{{i}}</td>
          <td>Tina</td>
          <td>666</td>
          <td>0000</td>
        </tr> 
      </table>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Footer from '../components/Footer'


export default {
  components:{
    Footer
  },
  data(){
    return{
      numOfPartipants:20
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "PINGPANG";
  src: url("../font-family/HelveticaHv.ttf");
}
body {
  font-family: "PINGPANG";
}

.Rank{
  width: 100%;
  .banner{
    background: url("../image/ranking-list.png") no-repeat center;
    background-size: 100%;
    width: 2.746rem;
    height: 1rem;
    margin: 0 auto;
  }
  .Billboard{
    width: 100%;
    margin-bottom: 1.3rem;
  table{
    width: 100%;
    tr{
        border: 1px solid #f0f0f0;
        line-height: 0.866rem;
        border-top: none;
      }
    >tr:nth-child(1){ 
      background-color: #ffffff;
      box-shadow: 0 0 .133rem 0
        #e5e5e5;
      border-radius: .0533rem;
      width: 100%;
      height: 1.2rem;
      font-size: .3733rem;
      line-height: .93rem;
      color: #000000;
      font-weight: 600;
      text-align: right;
      >th:nth-child(1){
        text-align: center;
      }
      >th:nth-child(3){
        text-align: right;
      }
      >th:nth-child(4){
        text-align: center;
      }
    }
      td{
       color: #555555; 
       font-size: .32rem;
      }
      td:nth-child(1){
      text-align:center;           
      }
      td:nth-child(2){
       line-height:1.08rem;
       color: #000000;
       font-weight: bold;
      }
      td:nth-child(3){
       text-align: right;
      }
      td:nth-child(4){
       text-align: center;
      }
      tr:nth-child(2)>td:nth-child(1),
      tr:nth-child(2)>td:nth-child(3){
        font-size: .4rem;
        font-weight: bold;
        font-style: italic;
        line-height: 1.08rem;
        color: #fe0000;
      }
      tr:nth-child(3)>td:nth-child(1),
      tr:nth-child(3)>td:nth-child(3){
      font-size: .4rem;
      font-weight: bold;
      font-style: italic;
      line-height: 1.08rem;
      color: #ffb800;
    }
     tr:nth-child(4)>td:nth-child(1),
     tr:nth-child(4)>td:nth-child(3){
      font-size: .4rem;
      font-weight: bold;
      font-style: italic;
      line-height: 1.08rem;
      color: #50abfd;
    }
    
   }
  }
  }
</style>
