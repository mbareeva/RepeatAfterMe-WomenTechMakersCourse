import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contributors from './views/Contributors.vue';
import Contributor from './views/Contributor.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: Contributors,
    },
    {
      path: '/contributors/:id',
      name: 'contributor',
      component: Contributor
    }
  ],
});