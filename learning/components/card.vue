<template>
  <div class="card">
    <div class="card-header">{{post.title}}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <nuxt-link
          :to="{name: 'posts-id', params: {id: post.id}}"
          class="btn btn-primary"
        >Navigate to post</nuxt-link>
      </blockquote>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: Object
  }
};
</script>