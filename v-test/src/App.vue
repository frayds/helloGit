<template>
  <div id="app">
    <HeaderDiv :logo="logoMsg"></HeaderDiv>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import HeaderDiv from './components/header'
export default {
  name: 'App',
  data () {
    return {
      logoMsg:'WiseWrong'
    }
  },
  components:{
    HeaderDiv
  }
    
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.display{
  text-align: center
}
</style>
