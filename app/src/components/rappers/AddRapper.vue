<template>
<section>
  <h2>Add a new rapper</h2>
  <RapperForm 
    label="Add"
    :musicians="musicians"
    :onEdit="handleAdd"/>
</section>
</template>

<script>
import RapperForm from './RapperForm.vue';
import api from '../../services/api.js';

export default {
  components: { 
    RapperForm 
  },
  props: {
    musicians: Array
  },
  methods: {
    handleAdd(rapper) {
      return api.addRapper(rapper)
        .then(added => {
          this.$router.push(`/rappers/${added.id}`);
        });
    }
  }
};
</script>

<style>
</style>