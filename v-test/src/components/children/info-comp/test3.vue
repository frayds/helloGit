<template>
<div class="container">
    <div class="row">
        <li>
            <a>{{tree[0].label}}</a>
            <ul>
                <!-- <test3 v-if="tree.children" :tree="item" v-for="item in tree.children"></test3> -->
            </ul>
        </li>
    </div>
</div>
</template>

<script>
export default{
  name:'test3',
  data () {
    return {
      
    }
  },
  computed:{
     tree(){
         return this.$store.state.tree
     } 
  }
}
</script>