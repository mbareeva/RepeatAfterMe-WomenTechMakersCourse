<script>
export default {
  name: 'contributorCard',
  props: ['data']
}
</script>

<template lang="pug">
div.wrapper
   p Name of contributor:
   div {{data.name}}
   p Contact me: 
   div {{data.email}}
   p - Post -
   div(v-for="post in data.posts")  {{post.topic}} 
   p Description
   div(v-for="post in data.posts") {{post.description }}
   p Map id: 
   div(v-for="post in data.posts") {{post.maps}} 
</template>

<style>
.wrapper {
  background-color: azure;
  padding: 20px;
  border: 1px solid;
  border-radius: 30px;
}
.location {
  color: #fff
}

p {
   color: blue;
}
</style>