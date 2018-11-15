<template>
  <div class="home">
    <div class="welcome" v-if="this.$route.params.id === undefined">
      <h1>Welcome</h1>
      <p>This is sever side javascript tutorial.</p>
    </div>
    <div class="detail" v-else-if="this.$route.params.id !== 'add'">
      <router-view :topic="topic" name="Detail"/>
    </div>
    <div class="add" v-else>
      <router-view
        :topics="topics"
        name="Add"/>
    </div>
    <ul class="func">
      <li v-if="this.$route.params.id !== 'add'"><router-link to="/add">add</router-link></li>
      <li v-if="topic"><router-link :to="`${topic.id}/edit`">edit</router-link></li>
      <li v-if="topic"><router-link :to="`${topic.id}/delete`">delete</router-link></li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: ['topics', 'topic'],
    data () {
      return {
      }
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
