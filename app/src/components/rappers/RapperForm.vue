
<template id="rapper-template">
  <section class="add-rapper">
    <h1>New Rapper</h1>

    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>

     
      <label>
        musicians:
        <select v-model.number="edit.musicianId" required>
          <option disabled value="">Please select a musician</option>
          <option
            v-for="musician in musicians"
            :key="musician.id"
            :value="musician.id">
            {{musician.name}}
          </option>
        </select>
      </label>

      <label>
        Albums:
        <input type="number" name="albums" placeholder="Albums" required
          v-model.number="edit.albums">
      </label>
      
      <label>
        <button type="submit">{{ label }}</button>
      </label>
    </form>
    {{ edit }}
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
    rapper: Object,
    label: String,
    musicians: Array,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.rapper ? Object.assign({}, this.rapper) : initRapper()
    };
  },
  computed: {
    editMode() {
      return !!this.rapper;
    }
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