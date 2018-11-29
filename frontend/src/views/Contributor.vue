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
  h2.name {{contributor.name}}
  div {{contributor.posts}}
</template>

<style>
.name {
  color:rgb(255,20,147);
}
</style>