<template>
  <div class="home">
    <div class="title">
      Welcome to Todo List
    </div>
    <v-card class="list">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="allTodos"
        :search="search"
      />
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',

  components: {},
  data() {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
      ],
    };
  },
  computed: {
    ...mapState(['allTodos']),
  },
  methods: {
    ...mapActions(['fetchTodos']),
    getTodos() {
      this.fetchTodos();
    },
  },
  created() {
    this.getTodos();
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem !important;
    margin-block: 2.5rem;
    height: 5rem;
  }
  .list {
    width: 75%;
  }
  .text-start {
    font-size: 1.5rem;
  }
}
</style>
