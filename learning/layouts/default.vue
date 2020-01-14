<template>
  <div>
    <Nav />
    <div class="jumbotron"></div>
    <nuxt />
  </div>
</template>

<script>
import Nav from "@/components/nav";
export default {
  components: {
    Nav
  }
};
</script>
