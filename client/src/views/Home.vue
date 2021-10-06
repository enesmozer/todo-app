<template>
  <div class="home">
    <div class="title">
      Welcome to Todo List
    </div>
    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="info"
          elevation="2"
          class="new-todo"
          v-bind="attrs"
          v-on="on"
        >
          Add New Todo
        </v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar
            color="primary"
            dark
          >
            Add New Todo
          </v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">
              Hello world!
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              text
              @click="dialog.value = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
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
        class="table"
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
  .new-todo {
    align-self: flex-end;
    margin-right: 4rem;
    transform: translateX(-78%);
    margin-bottom: 2rem;
  }
}
.v-data-table::v-deep th {
  font-size: 1.5rem !important;
}
.v-data-table::v-deep td {
  font-size: 1.3rem !important;
}
.v-data-footer::v-deep div {
  font-size: 1.1rem !important;
}
</style>
