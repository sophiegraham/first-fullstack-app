import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Rappers from './components/rappers/Rappers.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/rappers', component: Rappers },
    { path: '*', redirect: '/' }
  ]
});