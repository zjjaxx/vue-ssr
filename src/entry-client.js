import createApp from "./main"

const {router,vm}=createApp()

router.onReady(function(){
    //挂载激活
    vm.$mount("#app")
})