<script>
import { mapActions, mapState } from 'vuex';
import ContributorCard from '@/components/ContributorCard.vue'

export default {
  name: 'contributors',
  created() {
    this.fetchContributors();//call on inside store - modules - user
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
  img(alt="Vue logo" src="../assets/logotip.jpg")
  div 
  button(@click="addLikes") Like!
  div Likes: {{likes}}
  div(v-if="contributors.length") 
    p Our contributors:
    div.contributors-list
      div.contributor(v-for="contributor in contributors")
        contributor-card(:data="contributor" key="contributors._id")
</template>

<style>
.contributors-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


.contributor {
  margin: 10px;
  width: 28%;
}


@media all and (max-width: 990px) {
.contributor {
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
}


@media all and (max-width: 650px) {
.contributor {
   margin-left: auto;
  margin-right: auto;
  width: 75%;
}
}
</style>