<template>
<section>
  <h2>Rappers</h2>
  <p v-if="!rappers">Loading rappers...</p>
  <ul v-else class="list">
    <Rapper
      v-for="(rapper, index) in rappers"
      :key="index"
      :rapper="rapper"
    />
  </ul>
  <AddRapper :on-add="handleAdd"/>
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
  },
  components: { 
    Rapper,
    AddRapper
  },
  methods: {
    handleAdd(rapper) {
      return api.addRapper(rapper)
        .then(saved => {
          this.rappers.push(saved);
        });
    }
  }
};
</script>

<style>
ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>