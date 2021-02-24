import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

Vue.config.productionTip = false

//创建工厂函数，返回vue实例
const createApp=function(context){
  const router=createRouter()
  const vm=new Vue({
    context,
    router,
    render: h => h(App)
  })
  return {router,vm}
}
module.exports=createApp
