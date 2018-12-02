<script>
export default {
  name: 'home',
};
</script>

<template lang="pug">
   .home
    img(alt="Vue logo" src="../assets/logotip.jpg")
    h1 Repeat After Me
    h1 Hello! Welcome to Repeat After me app!
    h3 Share with us your travelling experience by making a post!
</template>

<style>

h2 {
  color:black;
}

img {
  width: 100%;
  height: 20%;
   
}

@media all and (min-width: 700px) {
img {
  width: 70%;
  height: 400px;
  
}
}
</style>

