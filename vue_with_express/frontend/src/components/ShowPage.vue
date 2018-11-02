<template>
  <div>
    <h1>상세 내용</h1>

  </div>
</template>

<script>
  export default {
    name: "ShowPage",
    created: function () {
      var id = this.$route.params.id
      this.$http.get(`/api/movies/${id}`)
        .then((response) => {
          console.log(response.data);
          this.movie = response.data
        })
    },
    data: function () {
      return {
        movie: {}
      }
    }
  }
</script>

<style scoped>

</style>
