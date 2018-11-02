<template>
  <div class="todos">
    <h1>
      <router-link :to="{ name: 'view' }">Server Side JavaScript</router-link>
    </h1>
    <ul>
      <li v-for="todo in todos">
        <router-link :to="{ name: 'detail', params: { id: todo.id } }">{{todo.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  import detail from "./Detail";

  export default {
    name: "View",
    components: { detail },
    created(){
      var id = this.$route.params.id;
      this.$http.get('/api/todos').then((response)=>{
        console.log(response);
        this.todos = response.data.todos
      })
    },
    data(){
      return {
        todos: {},
      }
    },
  }
</script>

<style scoped>

</style>
