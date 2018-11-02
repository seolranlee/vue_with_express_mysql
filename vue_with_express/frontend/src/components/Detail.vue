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
    <article>
      <p>{{this.todo.title}}</p>
      <!--<p>'</p>-->
    </article>
  </div>



</template>

<script>
  export default {
    name: "detail",
    props: ['todos'],
    created: function () {
      var id = this.$route.params.id
      this.$http.get(`/api/todos/${id}`)
        .then((response) => {
          this.todo = response.data.todo
          console.log(response.data);
        })
    },
    data(){
      return {
        todo: [],
      }
    },
  }
</script>

<style scoped>

</style>
