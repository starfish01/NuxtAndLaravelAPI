<template>
  <div>
    <h2>Making API request - the Vue way</h2>
    <div class="container">
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: []
    };
  },
  asyncData(context) {
    // nuxt this is used to do server side redering and front end fetching
    // console.log(context);
    return axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        // console.log({posts: response.data})
        return {posts: response.data}
      })
      .catch(error => {
        console.log(error);
      });
  }
};

// vue way only render on the front end
// import axios from "axios";
// export default {
//   data() {
//     return {
//       posts: []
//     };
//   },
//   mounted() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then(response => {
//         this.posts = response.data;
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// };
</script>
