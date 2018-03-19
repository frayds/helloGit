<template>
<div class="container col-6 offset-3 test">
    <div class="row justify-content-md-begin pt-3 pl-3">
       <div class="btn-group btn-group-toggle" data-toggle="buttons" v-model="tabView">
            <label class="btn btn-outline-info active" @click="setButton1">
                <input type="radio" name="options" id="option1" autocomplete="off" checked > 测试1
            </label>
            <label class="btn btn-outline-info" @click="setButton2">
                <input type="radio" name="options" id="option2" autocomplete="off" > 测试2
            </label>
            <label class="btn btn-outline-info" @click="setButton3">
                <input type="radio" name="options" id="option3" autocomplete="off"> 测试3
            </label>
        </div> 
        <keep-alive>
            <comment v-bind:is="tabView"></comment>
        </keep-alive>
    </div>    
</div>
</template>

<script>
import Test1 from './info-comp/test1'
import Test2 from './info-comp/test2'
import Test3 from './info-comp/test3'

export default {
  name:'info',
  data () {
      return {
          tabView:'Test1'
      }
  },
  components:{
      Test1,
      Test2,
      Test3
  },
  methods:{
      setButton1:function (){
          this.tabView='Test1'
      },
      setButton2:function (){
          this.tabView='Test2'
      },
      setButton3:function (){
          this.tabView='Test3'
      }
  }
}
</script>

<style scoped>
.test{
    background-color: grey;
    height: 400px;
}
</style>

