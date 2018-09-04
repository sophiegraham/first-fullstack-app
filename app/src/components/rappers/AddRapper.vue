
<template id="rapper-template">
  <section class="add-rapper">
    <h1>New Rapper</h1>
  <!-- chamge name to Form, add below to a AddRapper file -->
    <!-- <RapperForm
      lable="Add"
      :albums="albums"
      :onEdit="handleAdd"/> -->
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="rapper.name">
      </label>

      <label>
        City:
        <input type="text" name="city" placeholder="Birthplace" required
          v-model="rapper.city">
      </label>

      <label>
       Year of Birth:
        <input type="text" name="yob" placeholder="Year of Birth" required
          v-model="rapper.yob">
      </label>

      <label>
        Albums:
        <input type="number" name="albums" placeholder="Number of Albums" required 
          v-model="rapper.albums">
      </label>
      
      <label>
        <button type="submit">Add Rapper</button>
      </label>
    </form>
  </section>
</template>

<script>

const initRapper = () => {
  return {
    name: '',
    city: '',
    yob: '',
    albums: ''
  };
};
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      rapper: initRapper()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.rapper)
        .then(() => {
          this.rapper = initRapper();
        });
    }
  }
};
</script>

<style>
.add-rapper {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
</style>