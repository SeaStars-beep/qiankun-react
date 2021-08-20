<template>
  <div class="about">
    <h3 @click="handleClick">跳转react</h3>
    <h1>This is about page</h1>
  </div>
</template>
<script>


export default{
  methods:{
    handleClick(){
      window.history.pushState(null, 'react16','/react16')
    }
  }
}
</script>


<style scoped>
  .about {
    color: #7265e6;
  }
</style>
