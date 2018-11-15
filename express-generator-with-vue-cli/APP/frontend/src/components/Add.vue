<template>
  <div class="add">
    <p>
      <input type="text" name="title" placeholder="title" v-model="newTopic.title">
    </p>
    <p>
      <textarea name="description" cols="30" rows="10" v-model="newTopic.description" placeholder="description"></textarea>
    </p>
    <p>
      <input type="text" name="author" placeholder="author" v-model="newTopic.author">
    </p>
    <p>
      <a href="#" @click.stop.prevent="handleClick">submit</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Add',
    props: ['topics'],
    data: function(){
      return{
        newTopic: {
          title: '',
          description: '',
          author: '',
        }
      }
    },
    methods: {
      handleClick: function(){
        // this.$emit('onAdd', [this.newTopic]);

        this.$http.post(`/api/topics/add`, this.newTopic)
          .then((response) => {
            console.log(response.data.insertId);
            this.$eventHub.$emit('onAdd',{
              'topic': this.newTopic,
              'id': response.data.insertId
            });
            this.$router.push(`../${response.data.insertId}`);

            // this.topics = response.data
          })
      }
    },
    computed: {
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
