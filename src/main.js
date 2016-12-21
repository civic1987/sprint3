import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from './App/pages/home/home-app';
import Events from './App/pages/events/events-center';
import Places from './App/pages/places/places-center';
import Emails from './App/pages/emails/emails-center';
import MainNav from './App/main-nav/main-nav';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/events',
  component: Events
}, {
  path: '/places',
  component: Places
}, {
  path: '/emails',
  component: Emails
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  components: {
    'main-nav': MainNav
  }
}).$mount('#app')