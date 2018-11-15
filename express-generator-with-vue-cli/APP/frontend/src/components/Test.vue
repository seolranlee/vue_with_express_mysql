<template>
  <div class="test">
    <input type="text" v-model="text[0]">
  </div>
</template>

<script>
  export default {
    name: 'Test',
    props: ['topics','text'],
    data: function(){
      return{

      }
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
