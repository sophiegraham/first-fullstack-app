<template id="rapper-template">
  <div v-if="rapper">
    <article v-if="!editing">
      <h3>{{ rapper.name }}</h3>
      <p>From: {{ rapper.city }}</p>
      <p>Born: {{ rapper.yob }}</p>
      <p class="albums">
        Current albums: 
        <strong>{{ albums }}</strong> 
      </p>
      <p class="albums">
        <span class="size">(a <em>{{ size }}</em> rappers)</span>
      </p>
      <p>
        <button @click="handleRemove">remove this rapper</button>
      </p>
    </article>
    <RapperForm 
      v-else 
      label="Update"
      :rapper="rapper"
      :musicians="musicians"
      :onEdit="handleUpdate"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : '✏️' }}</button>
  </div>
</template>

<script>
import RapperForm from './RapperForm';
import api from '../../services/api.js';
export default {
  props: {
    musicians: Array
  },
  data() {
    return {
      rapper: null,
      editing: false
    };
  },
  components: {
    RapperForm
  },
  created() {
    api.getRapper(this.$route.params.id)
      .then(rapper => {
        this.rapper = rapper;
      });
  },
  computed: {
    quadrant() {
      if(!this.rapper || !this.musicians) {
        return null;
      }
      const { musiciansId } = this.rapper;
      return this.musician.find(q => q.id === musicianId);
    },
    albums() {
      return this.rapper.albums.toLocaleString();
    },
    size() {
      return this.rapper.albums > 5 ? 'wow!' : 'hop in the studio';
    }
  },
  methods: {
    handleRemove() {
      if(!confirm(`Are you sure you want to remove ${this.rapper.name}?`)) {
        return;
      }
      return api.removeRapper(this.rapper.id)
        .then(() => {
          this.$router.push('/rappers');
        });
    },
    handleUpdate(toUpdate) {
      return api.updateRapper(toUpdate)
        .then(updated => {
          this.rapper = updated;
          this.editing = false;
        });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>