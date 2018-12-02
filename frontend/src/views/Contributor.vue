<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'contributor',
  created() {
    this.fetchContributor(this.$route.params.id)
  },
  computed: {
    ...mapState({
      contributor: state => state.contributors.contributor
    }),
  },
  methods: {
    ...mapActions(['fetchContributor'])
  },
};
</script>

<template lang="pug">
div
  img(alt="Vue logo" src="../assets/logotip.jpg")
  h2.name {{contributor.name}}
  div {{contributor.posts}}
</template>

<style>
.name {
  color:rgb(255,20,147);
}
img {
  width: 100%;
  height: 20%;
}

@media all and (min-width: 800px) {
img {
  width: 75%;
  height: 400px;
}
}

@media all and (min-width: 1000px) {
img {
  width: 70%;
  height: 450px;
}
}
</style>