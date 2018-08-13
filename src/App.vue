<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
<!--     <ComponentHello></ComponentHello> -->
    <!-- <ComponentHello></ComponentHello> -->
<!--     <router-link to="/hello">page1</router-link>
    <router-link to="/world">page2</router-link> -->
    <!-- <compentHome></compentHome>
     --><router-view v-bind:mainParams="mainParams"  v-on:transvotenum='getvotenum'></router-view>
  </div>
</template>

<script>
// import ComponentHello from './components/Hello.vue'
import {flexible} from './js/lib/properScreen.js'
import {flexibleCss} from './js/lib/properScreen_css.js'
import axios from 'axios'
import {eggis} from './nameSpace/index.js'
flexible();
flexibleCss();
import compentHome from './pages/home.vue'
export default{
  name: 'app',
  // components: {ComponentHello}
  components: {compentHome},
  data(){
    return{
      mainParams:{//接口获得的参数
         pictureIntroduce:'这是我的作品',//作品介绍
         pictureUrl:[//个人作品图片
        "../static/images/bg4.jpg",
        "../static/images/bg.jpg",
        "../static/images/giftBox.png",
         "../static/images/pic.png",
         "../static/images/gift-bag.png",
        "../static/images/bg.jpg",
        "../static/images/giftBox.png",
         "../static/images/old-man.png",
         "../static/images/pic.png",
        "../static/images/bg.jpg",
        "../static/images/giftBox.png",
         "../static/images/bg4.jpg"
      ],
      peopleAllNum:54445,
      voteAllNum:123456,
      visitAllNum:123456,
      author:['chen','li','wei','yang','w','d','s','d','z'],
      number:[1,2,3,4,5,6,7,8,9],
      authorN:[{name:'chen',id:1},{name:'li',id:2},{name:'wei',id:3},{name:'yang',id:4}],
      vote1:0
      }
       
      
    }
  },
  methods:{
    getVote() { 
      axios.get(`${eggis.path}getActivityInfo`, {
        params: {
          activityId: '1006378872980049921',
          unionId: 'sss'
        }
      })
      .then(function (res) {
        console.log(data)
        if (res.data) {
          _this.variable.persons.push(res.data.data)
        }
        console.log(222333444, _this.state.persons)
      })
      .catch(function (res) {
      })
    },
    getvotenum(msg){
      this.mainParams.vote1 = msg
     
    }
}
}
</script>

<style lang="scss">


//变量
$fontcolor: #fff;
$subfontcolor: #525252;
$bgcolor: #31c3b0;
  /*reset css */
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,pre,form,fieldset,legend,input,textarea,p,thead,tbody,tfoot,th,td {margin:0;padding:0}  
ul,ol{list-style-type:none;list-style-image:none}
a{text-decoration:none}a:active{background-color:transparent}  a:active,a:hover{outline:0 none}a:focus{outline:1px dotted}  
html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%;font-size:62.5%}  
body{font-size:14px;line-height:1.8}
h1,h2,h3,h4,h5,h6{font-weight:400}h1{font-size:36px}h2{font-size:30px}h3{font-size:22px}h4{font-size:18px}h5{font-size:14px}h6{font-size:12px}
a:link,a:visited,a:hover,a:active{text-decoration: none;}
a,button{
    outline:none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0); 
}
button,input,textarea{
    border: none;
    background: none;
    outline: none;
}
textarea{overflow: hidden;}
a:hover{text-decoration:none;}

/* common css */
.hide{
  display: none;
}

.left {
  float: left;
}

.right {
  float: right;
}

.clear {
  clear: both;
}

.clearfix {
  *zoom: 1;
  &:before {
    display: table;
    line-height: 0;
    content: "";
  }
  &:after {
    display: table;
    line-height: 0;
    content: "";
    clear: both;
  }
}

.line20 {
  height: 20px;
  background: #f9f9f9;
}

.line50 {
  height: 50px;
}

.line100 {
  height: 100px;
}

//设置input框的placeholder样式
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #fff;
    font-size: 20px;
  } 
  input:-moz-placeholder, textarea:-moz-placeholder {
    color: #fff;
    font-size: 20px;
  } 
  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #fff;
    font-size: 20px;
  } 
  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #fff;
    font-size: 20px;
  }
</style>
