<template>
  <div>
    <h1>{{post.title}}</h1>
    <pre>{{ post.body }}</pre>
    <hr />
    <nuxt-link to="/posts">Back -></nuxt-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      post: []
    };
  },
  head() {
    return {
      title: this.post.title
    };
  },
  asyncData(context) {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts/" + context.params.id)
      .then(res => {
        return { post: res.data };
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>