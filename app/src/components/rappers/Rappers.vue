<template>
<section>
  <h2>Rappers</h2>
  <p v-if="!rappers">Loading rappers...</p>
  <ul v-else class="list">
    <li
      v-for="rapper in rappers"
      v-bind:key="rapper.id">
      <router-link :to="`/rappers/${rapper.id}`">
        {{rapper.name}} - {{rapper.musician}}
      </router-link>
    </li>
  </ul>
  <p>
    <router-link to="/rappers/add">Add a new rapper</router-link>
  </p>
</section>
</template>

<script>
import Rapper from './Rapper';
import AddRapper from './AddRapper.vue';
import api from '../../services/api';

export default {
  data() {
    return { 
      rappers: null
    };
  },
  created() {
    api.getRappers()
      .then(rappers => {
        this.rappers = rappers;
       });
  }
};
</script>

<style scoped>
ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
a {
  text-decoration: none;
  color: initial;
}
</style>