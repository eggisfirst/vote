<template>
  <div class="Search">
    <div class="icon-search" v-on:click="searchBox"></div>
    <input type="text" v-if = 'onOff' v-model="inputValue" placeholder="inputValue" v-on:click = 'clickInput' >
  </div>
</template>

<script>

export default {
  data(){
    return{
      inputValue : '输入编号或名称搜索投票',
      onOff : 'true'
    }
  },
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
   }
  }
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
}

</style>
