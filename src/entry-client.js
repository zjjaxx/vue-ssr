import createApp from "./main"

const {router,vm,store}=createApp()
if(window.__INITIAL_STATE__){
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(function(){
    //挂载激活
    vm.$mount("#app")
})