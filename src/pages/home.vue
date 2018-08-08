<!-- <keep-alive> -->
<template>
  <div class="home" v-bind:style="{height: height+'px'}">
    <h1>慕思招商系统</h1>
    <ul class="countryList">
      <li v-for="country in countrys">
        <div><p>{{country.num1}}家</p></div>
      </li>
    </ul>
      <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div id="main" v-bind:style="{height: (height-160)+'px'}" class="deviceHeight worldMap" style="width: 100%;"></div>
  </div>
</template>
<!-- </keep-alive> -->

<script>

import echarts from 'echarts'
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import {vv} from '../js/variable.js'
Vue.use(vueResource)
Vue.use(VueRouter)
/*全局变量123*/
var _this = {};

var geoTop = 170;
var geoLeft = 200;
var selectedMode = true;
var mapName = 'world';
var wjson;

var provinces = ["广东", "安徽", "澳门", "北京", "重庆", "福建", "甘肃", "广西", "贵州", "海南", "河北", "黑龙江", "河南", "湖北", "湖南", "江苏", "江西", "吉林", "辽宁", "内蒙古", "宁夏", "青海", "山东", "上海", "山西", "四川", "天津", "香港", "新疆", "西藏", "云南", "浙江"];
var brandsArr;
var labelShow = false;

var ajaxObj = {};
var ajaxObj1 = {}; //获取拓展人员资料参数
var brandList = [];
var brandState = true;
var canClick = true;
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home组件',
      height: document.documentElement.clientHeight,
      series: {},
      countrys:[/*{
        name: '中国',
        num1: '3000'
      },{
        name: '美国',
        num1: '30'
      }*/],
      CNname: [],
      ENname:[],
      sum: []
    }
  },
  methods:{
    setMap:function(){
        var myChart = echarts.init(document.getElementById('main'));
      // console.log(this.$router);
      this.$http.jsonp('http://zs.derucci.net:8821/deruccimid/cst/sortinfo', {
      jsonp: 'jsoncallback'
    }).then(function(arr1) {
      _this = this;
      var arr1 = arr1.body;
      // seriesLength = arr1.length;
      for(var i=0;i<arr1.length;i++){
        var str1 = arr1[i].area;
        str1 = str1.split('|');
        var array = arr1[i].qtyflags;
        var num = 0;
        var obj = {
          name: str1[1],
          num1: array[0].QTY
        };
        for(var j=0;j<array.length;j++){
          num += parseInt(array[j].QTY);
        } 
        
        _this.ENname.push(str1[0]);
        _this.CNname.push(str1[1]);
        _this.sum.push(num);
        this.countrys.push(obj);
      }

      Vue.http.get('../static/geojson/world.json').then(function(geoJson){
        // console.log(this.$router);
        geoJson = geoJson.body;
        /*载入世界地图*/
      var myChart = echarts.init(document.getElementById('main'));
      //地图加载成功
      // $('.animate').css('background', 'none').fadeOut(600);
      // Tips();
      echarts.registerMap(mapName, geoJson);
      var geoCoordMap = {
        "China": [113.5, 63.48],
        "Japan": [138.76, 48.67],
        "Australia": [135.13, -18.3],
        "USA": [-80.02, 48.54],
        "Canada": [-103.98, 70.33],
        "India": [76.5, 29.48],
        "Germany": [10.76, 63.67],
        "Italy": [12.5, 48],
        "Cambodia": [104, 18]
      };

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };

      //定义series数组
      var series = new Array();
      for (var i=0;i<_this.ENname.length;i++) {
        if (_this.ENname[i] == 'China') {
          var symbolSize = [200, 230];
          var fontSize = 32;
        } else if (_this.ENname[i] == 'Cambodia' || _this.ENname[i] == 'Italy') {
          var symbolSize = [50, 57];
          var fontSize = 14;
        } else {
          var symbolSize = [100, 115];
          var fontSize = 18;
        }

        var obj2 = {
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData([{
            name: _this.ENname[i],
            value: 2
          }]),
          symbol: 'image://../static/images/6-tap.png',
          symbolSize: symbolSize,
          label: {
            normal: { 
              show: true,
              formatter: _this.CNname[i] + '\n' + _this.sum[i] + '家' + '\n',
              textStyle: {
                color: '#000',
                fontSize: fontSize
              }
            }
          }
        }
        series.push(obj2);
      }

      (function() {
        var data = new Array();
          for (var i = 0; i < _this.ENname.length; i++) {
          if (_this.ENname[i] == 'USA') {
            _this.ENname[i] = 'United States of America';
          }
          var temp = _this.ENname[i];
          if (_this.ENname[i] == 'United States of America') {
            _this.ENname[i] = 'USA';
          }
          var obj = new Object();
          obj.name = temp;
          obj.value = 1;
          data.push(obj);
        }

        var obj = {
          type: 'map',
          map: 'world',
          zoom: 1.2,
          // roam: true,
          top: geoTop,
          left: geoLeft,
          itemStyle: {
            normal: {
              borderColor: vv.borderColor,
              areaColor: vv.MapColorL
            }
          },
          data: data
        };
        series.push(obj);
      })()
      // this.series = series;

      //设置地图
      var option = {
        // tooltip: {
        //  trigger: 'item',
        //  showDelay: 0,
        //  transitionDuration: 0.2,
        //  trigger: 'item',
        //  formatter: function(params) {
        //    return tooltipData(params);
        //  }
        // },
        // title: {
        //   text: '慕思招商系统',
        //   top: 50,
        //   left: 260,
        //   textStyle: {
        //     color: '#dcdcdc',
        //     fontSize: 40,
        //     fontWeight: 300
        //   }
        // },
        visualMap: {
          type: 'piecewise',
          left: 40,
          bottom: 50,
          itemWidth: 40,
          itemHeight: 40,
          orient: 'vertical',
          textStyle: {
            color: '#e5e5e5',
            fontSize: 26
          },
          outOfRange: {
            color: vv.pointColor,
            fontSize: 30
          },
          pieces: [{
            min: 1,
            max: 10,
            label: '已开发区域' 
          }, {
            min: 0,
            max: 0,
            label: '未开发区域'
          }],
          color: [vv.MapColorR, vv.MapColorL]
        },
        toolbox: {
          show: false,
          left: 'left',
          top: 'top',
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        geo: {
          type: 'map',
          map: mapName,
          zoom: 1.2,
          // roam: true,
          top: geoTop,
          left: geoLeft,
          itemStyle: {
            normal: {
              borderColor: vv.borderColor,
              areaColor: vv.MapColorL
            }
          }
        },
        series: series
      };
      myChart.setOption(option);
      // load();

      //点击相应国家实现下钻
      myChart.on('click', function(params) {
        var str = params.name;
        _this.$router.push({ path: '/country/'+str })
      });
      }, function(){
        console.log('数据获取失败！');
      }); 
    })
    }
  },
  mounted(){
    this.setMap();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  height: 800px;
  background: url(../assets/background.jpg) no-repeat;
  background-size: 100% 100%;
}
h1{
  height: 120px;
  width: 600px;
  font-size: 48px;
  line-height: 120px;
  color: #e5e5e5;
  padding-left: 240px;
  position: fixed;
  top: 40px;
  background: url(../assets/1-logo.png) no-repeat,url(../assets/2-titleback.png) no-repeat;
  background-position: 70px 0,0 0; 
  background-size: auro 110px,auto 120px;
}
#main{
  padding-top: 160px;
}
.countryList li{
  color: #ccc;
}
</style>
 