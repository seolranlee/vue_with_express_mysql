<template>
  <div>
    <div v-if="topic">
      <h2>{{topic.title}}</h2>
      <p>{{topic.description}}</p>
      <p>by {{topic.author}}</p>
      <router-view
        :topic="topic"
        name="Edit"></router-view>
    </div>
    <div v-else>
      <h1>404</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    props: ['topic'],
    data:function(){
      return{
      }
    },
    watch: {
      // 질문이 변경될 때 마다 이 기능이 실행됩니다.
      topic: function () {
        console.log('change')
      }
    },
    methods: {

    },


    // computed: {
    //   topic: function () {
    //     var that = this;
    //     return this.topics.filter(function (item) {
    //       return item.id == that.$route.params.id
    //     })
    //   }
    // }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
