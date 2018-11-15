<template>
  <div class="delete" v-if="topic">
    <h1>Delete?</h1>
    <p>{{topic.title}}</p>
    <p>
      <router-link v-on:click.native="handleDelete(topic.id)" :to="`../`" >YES</router-link>
      <router-link :to="`../${topic.id}`" >NO</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Delete',
    props: ['topic'],
    data: function(){
      return{
      }
    },
    methods: {
      handleDelete: function(topic_id){
        this.$eventHub.$emit('onDelete',{
          'id': topic_id
        });
        this.$http.post(`/api/topics/${topic_id}/delete`)
          .then((response) => {
            console.log(response);
            // this.topics = response.data
            // console.log(this.topics)
          })
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
