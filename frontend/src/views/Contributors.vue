<script>
import { mapActions, mapState } from 'vuex';
import ContributorCard from '@/components/ContributorCard.vue'

export default {
  name: 'contributors',
  created() {
    this.fetchContributors(); //call on inside store - modules - user
  },
  components: {
    ContributorCard
  },
  computed: {
    ...mapState({
      contributors: state => state.contributors.data,
      likes: state => state.contributors.likes
    }),
  },
  methods: {
    ...mapActions(['fetchContributors', 'addLikes'])
  },
};
</script>

<template lang="pug">
div
  h1 Hello!
  button(@click="addLikes") Like!
  div Likes: {{likes}}
  div(v-if="contributors.length") 
    p Here are the contributors:
    div.contributors-list
      div.contributor(v-for="contributor in contributors")
        contributor-card(:data="contributor" key="contributors._id")
</template>

<style>
.contributors-list {
  display: flex;
}
.contributor {
  margin: 30px;
}
</style>