<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{count}}</p>
    <p>{{$store.state.count}}</p>
    <button @click="addCount">addCount</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  asyncData({store}){
    return store.dispatch("fetchItem",{payload:10})
  },
  name: "Home",
  components: {
    HelloWorld,
  },
  data(){
    return {
      count:1
    }
  },
  methods:{
    addCount(){
      this.count++
    }
  },
  beforeMount(){
    console.log("client beforeMount trigger?")
  },
  mounted(){
    console.log("client has mounted?")
  }
};
</script>
