<script>
export default {
  name: 'contributorCard',
  props: ['data']
}
</script>

<template lang="pug">
div.wrapper
   div {{data._id}}
   div {{data.name}}
   div {{data.email}}
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
</style>