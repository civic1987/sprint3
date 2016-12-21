import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from './components/home/home-app';
import Events from './components/events/events-center';
import Places from './components/places/places-center';
import Emails from './components/emails/emails-center';
import MainNav from './components/main-nav/main-nav';

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