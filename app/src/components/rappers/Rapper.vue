<template id="rapper-template">
  <article>
    <h3>{{ rapper.name }}</h3>
    <p>From: {{ rapper.city }}</p>
    <p>Born: {{ rapper.yob }}</p>
    <p class="albums">
      Current albums: 
      <strong>{{ albums }}</strong> 
    </p>
    <p class="albums">
      <span class="size">(a <em>{{ size }}</em> neighborhood)</span>
    </p>
  </article>
</template>

<script>
export default {
  props: ['rapper'],
  computed: {
    population() {
      return this.rapper.population.toLocaleString();
    },
    size() {
      return this.rapper.population > 20000 ? 'big' : 'small';
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>