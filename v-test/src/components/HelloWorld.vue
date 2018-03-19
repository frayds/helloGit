<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <copyNum @transferUser='getUser'></copyNum>
    <p class="dispaly">用户名为:{{user}}</p>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import copyNum from './copyNum'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:''
    }
  },
  methods: {
    getUser (msg){
      this.user=msg;
    }
  },
  components: {
    copyNum
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
