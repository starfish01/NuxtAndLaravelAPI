<template>
  <div>
    <h2>Making API request - the Vue way</h2>
    <div class="container row">
      <Card v-for="post in posts" :key="post.id" :post="post" class="ml-auto mr-auto" />

      <button class="btn" v-scroll-to="'body'">Back To Top</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/card";
import { mapGetters } from "vuex";

export default {
  components: {
    Card
  },
  data() {
    return {
      allPosts: []
    };
  },
  computed: {
    ...mapGetters(["posts"])
  },
  // async asyncData({ store }) {
  //   // nuxt this is used to do server side redering and front end fetching
  //   // console.log(context);
  //   let { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  //   store.dispatch("setPosts", data);
  // },
  head: {
    title: "List of posts"
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

