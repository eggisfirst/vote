<template>
  <div class="Search">
    <!-- <router-link :to="{path:'/Individualdisplay/'+ inputValue}" >  -->
      <div class="icon-search" v-on:click="searchBox"></div>
     <!-- </router-link>   -->
      <input type="text" v-if = 'onOff' v-model="inputValue" placeholder="inputValue" v-on:click = 'clickInput' >
         <div class="alertTips">
      <p>您的输入有误</p>
    </div> 
  </div>
</template>

<script>

export default {
  data(){
    return{
      inputValue : '输入编号或名称搜索投票',
      onOff : 'true',
      number:''
    }
    
  },
  created(){
   
  },
  props:['mainParams'],
  methods:{
    //点击输入框文字隐藏，再次点击无效
    clickInput : function(){ 
      if(this.onOff == 'true'){
        this.inputValue = ''   
      }
      this.onOff = 'false' 
    },
    //点击搜索按钮获取搜索框里面的值
   searchBox : function(){
     var inputData = this.inputValue
     console.log(inputData)
      if(isNaN(inputData)){//输入错误弹出提示框，2s后消失
        var addTips = document.getElementsByClassName('alertTips')[0]
        addTips.style.top = '-9.7rem'
        addTips.style.transition = '1.5s'
        this.time()
    }else{
       this.$router.push({path:'/Individualdisplay/' + inputData})
    }
    var n = 'one'
     if(inputData == n){
       inputData.val = 'yes'
     }else{
       inputData = 'no'
     } 
   },
   time : function(){
      var timer = setInterval(function(){
        var addTips = document.getElementsByClassName('alertTips')[0]
        addTips.style.top = '-10.64rem'
        clearInterval(timer);
      },2000)
    
   }
  }
}
</script>

<style lang="scss" scoped>
.Search{
  width: 9.33rem;
  height: 1.066rem;
  position: relative;
  margin-top: 0.266rem;
  background-color: #ffffff;
	box-shadow: 0 0 0.133rem 0
		#e5e5e5;
	border-radius: .0533rem;
  .icon-search{
    background:url("../image/search-icon.png") no-repeat center;
    background-size: 100%;
    width: .4266rem;
    height: .4266rem;
    position: absolute;
    top:.32rem;
    left:.4rem
  }
  input{
    width: 8rem;
    height: 100%;
    font-size: .32rem;
    color: #8b8b8b;
    position: absolute;
    left:1.05rem
  }
  .alertTips{
    width:  10rem;
    height: .64rem;
    background-color: #fe0000;;
    opacity: 0.8;
    color: #fff;
    line-height: .64rem;
    position: absolute;
    top: -10.64rem;
    left: -.33rem;
    display: block;
    box-sizing: border-box;
    p{
      text-align: center;
    }
  }
}

</style>
