<template>
  <div class="movies">
    <h1>영화 목록</h1>
    <ul>
      <li v-for="movie in movies" class="movie">
        <img v-bind:src="movie.poster" class="poster">
        <h2>{{movie.name}}</h2>
      </li>
    </ul>
  </div>
</template>



<script>
  export default {
    name: "IndexPage",
    created(){
      this.$http.get('/api/movies').then((response)=>{
        console.log(response);
        this.movies = response.data
      })
    },
    data(){
      return {
        movies: []
      }
    }
  }
</script>

<style scoped>

</style>
