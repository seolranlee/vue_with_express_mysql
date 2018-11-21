<template>
  <div class="edit" >
    <div v-if="topic">
      <p>
        <input type="text" name="title" placeholder="title" v-model="subject.title">
      </p>
      <p>
        <textarea name="description" cols="30" rows="10" v-model="subject.description">{{topic.description}}</textarea>
      </p>
      <p>
        <input type="text" name="author" placeholder="author" v-model="subject.author">
      </p>
      <p>
        <router-link v-on:click.native="handleClick(topic.id)" :to="`../${topic.id}`" >submit</router-link>
      </p>
    </div>
    <div class="v-else">
      <h1>404</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Edit',
    props: ['topic'],
    data: function(){
      return{
        subject: {
          title: this.topic.title,
          description: this.topic.description,
          author: this.topic.author,
        }
      }
    },
    methods: {
      handleClick: function(topic_id){
        this.$emit('onChange', [this.subject]);
        this.$http.post(`/api/topics/${topic_id}/edit`, this.subject)
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
