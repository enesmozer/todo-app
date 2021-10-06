<template>
  <div class="home">
    <div class="title">
      Welcome to Todo List
    </div>
    <v-data-table
      :headers="headers"
      :items="allTodos"
      class="elevation-1 table"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
          </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-dialog
            v-model="isDialogOpen"
            max-width="500px"
            persistent
          >
            <template v-slot:activator="{ attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                @click="toggleDialog"
              >
                New Item
              </v-btn>
            </template>
            <v-card class="form-card">
              <add-todo />
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import AddTodo from '@/components/AddTodo.vue';

export default {
  name: 'Home',

  components: {
    AddTodo,
  },
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
    ...mapState(['allTodos', 'isDialogOpen']),
  },
  methods: {
    ...mapActions(['fetchTodos', 'toggleDialog']),
    initialize() {
      this.fetchTodos();
    },
  },
  created() {
    this.initialize();
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
  .table {
    width: 75%;
  }
  .new-todo {
    position: absolute;
    right: 1rem;
    margin-block: 2rem;
  }
}
.form-card {
  padding: 3rem;
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
