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
        <tr v-for="(t,index) in sortAuthord" >
          <td>{{index + 1}}</td>
          <td>{{t.name}}</td>
          <td>{{t.number}}</td>
          <td>{{t.id}}</td>
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
      numOfPartipants:'',
      num:[],
      maxVote:'',
      t:''
    }
  },
  props:['mainParams'],
  created(){
    // console.log(this.mainParams.authorN)
    this.numOfPartipants = this.mainParams.authorN.length
    this.t = this.mainParams.authorN
    console.log(this.t)
    // for(var item in this.mainParams.authorN){
    //  this.num = this.mainParams.authorN[item]
    //  console.log(this.num.number)
    // }
    // console.log(this.mainParams.authorN[2].number)
    //比较得出最大的票数
    //  var auN = this.mainParams.authorN
    //  var max = 0
    // for(var i = 0; i < this.numOfPartipants; i ++){
    //   max = max > auN[i].number ? max : auN[i].number
    //   this.maxVote = max
    // }
    
    // console.log(max)
   
  },
  methods:{//对数字排序
    // sortNumbers : function(a,b){
    //   return a - b 
    // },
    //对数组里面的数进行排序
    sortByKey : function(array,key) {
      return array.sort(function(b,a){
        var x = a[key]
        var y = b[key]
        return((x<y)?-1:((x>y)?1:0))
      })
    }
  },
  computed:{
    // sortNumbers : function() {
    //   return this.numbers.sort(sortNumbers)
    // },
    sortAuthord : function() {
      return this.sortByKey(this.t,'number')
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
