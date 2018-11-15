<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1><router-link to="/" exact>Server Side JavaScript</router-link></h1>
    <ul class="navi">
      <li v-for="topic in topics">
        <router-link :to="`/${topic.id}`">{{topic.title}}</router-link>
      </li>
    </ul>
    <router-view
      v-on:onChange="handleChange"
      :topics="topics"
      :topic="topic[0]"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$http.get('/api/topics')
      .then((response) => {
        this.topics = response.data
        console.log(this.topics)
      })
  },
  data () {
    return {
      topics: [],
    }
  },
  computed: {
    topic: function () {
      var that = this;
      return this.topics.filter(function (item) {
        return item.id == that.$route.params.id
      })
    }
  },
  methods: {
    addEvent:function(){
      this.$eventHub.$on('onAdd',this.addData);
    },
    addData : function( data ){
      this.topics.push({
        title: data.topic.title,
        description: data.topic.description,
        author: data.topic.author,
        id: data.id,
      })
    },
    handleChange: function([subject]){
      this.topic[0].title = subject.title;
      this.topic[0].description = subject.description;
      this.topic[0].author = subject.author;
    },
  },
  mounted:function(){
    let that = this;
    window.addEventListener('load', function(){
      that.addEvent();
    });
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  ul li{list-style: none}
</style>
