import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Rappers from './components/rappers/Rappers.vue';
import AddRapper from './components/rappers/AddRapper.vue';
import Rapper from './components/rappers/Rapper.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/rappers', component: Rappers },
    { path: '/rappers/add', component: AddRapper },
    { path: '/rappers/:id', component: Rapper },
    { path: '*', redirect: '/' }
  ]
});