import Vue from 'vue'
import VueRouter from 'vue-router'
import echarts from 'echarts'

// const Hello = resolve => require(['../components/Hello'], resolve)
// const World = resolve => require(['../components/World'], resolve)

Vue.use(VueRouter)

export var router = new VueRouter({
  routes: [
    {
    path: '/Vote',
    name: 'Vote',
    component: resolve => require(['pages/Vote'], resolve)
  },{
    path: '/Rank',
    name: 'Rank',
    component: resolve => require(['pages/Rank'], resolve)
  },
  {
    path: '/Individualdisplay',
    name: 'Individualdisplay',
    component: resolve => require(['pages/Individualdisplay'], resolve)
  },
  {
    path: '/Rule',
    name: 'Rule',
    component: resolve => require(['pages/Rule'], resolve)
  }
]
})