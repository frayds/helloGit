<template>
    <form class="form-inline py-4 my-2 copyNum col-4 offset-4 justify-content-center">
        <div class="form-group">
            <label for="formGroupExampleInput1">{{label}}</label>
            <input type="text" class="form-control ml-4" id="formGroupExampleInput1" placeholder="请输入用户名...." v-model="username" @change="setUser">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2 ">label名称:</label>
            <input type="text" class="form-control ml-4" id="formGroupExampleInput2" placeholder="请想要的label...." v-model="inputTxt">
            <button type="button" class="btn btn-primary" @click="setAuthor">change</button>
        </div>
    </form>
</template>

<script>
export default {
  name:'copyNum',
  data () {
      return {
          username:'',
          inputTxt:''
      }
  },
  methods: {
      setUser:function () {
          this.$emit('transferUser',this.username);
      },
      setAuthor:function(){
          this.$store.commit('newAuthor',this.inputTxt);
      }
  },
  computed: {
      label (){
          return this.$store.state.author
      }
  }
}
</script>


<style scoped>
.copyNum{
    background: #d3bcc6
}
</style>


