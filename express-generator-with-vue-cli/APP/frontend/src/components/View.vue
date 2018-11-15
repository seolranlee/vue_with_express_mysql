<template>
  <div class="topics">
    <h1><router-link to="/topics" exact>Server Side JavaScript</router-link></h1>
    <div class="topic-list">
      <p>{{this.$route.params.add}}</p>
      <ul>
        <li v-for="topic in topics">
          <router-link :to="{ name: 'topics/detail', params: { id: topic.id }}">{{topic.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="topic-detail">
      <router-view
        name="Detail"
        v-bind:topic="topic[0]"
      ></router-view>
      <div v-if="this.$route.params.id === undefined">
        <h2>Welcome</h2>
        <p>This is sever side javascript tutorial.</p>
      </div>
    </div>
    <ul class="func">
      <li>
        <router-link :to="{ name: 'topics/add', params: { name: 'add' } }">add</router-link>
      </li>
    </ul>
    <div class="topic-add">
      <router-view name="Add"></router-view>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'View',
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  a {
    color: #42b983;
  }
</style>
