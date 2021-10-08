<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [(v) => !!v || 'Name is required'],
    description: '',
    isTop: true,
  }),

  methods: {
    ...mapActions(['addTodo', 'toggleDialog']),
    onSubmit() {
      if (this.valid) {
        this.addTodo({
          name: this.name,
          description: this.description,
        }).then(() => {
          this.$refs.form.reset();
        });
      }
    },
    closeDialog() {
      this.$refs.form.reset();
      this.toggleDialog();
    },
  },
};
</script>
<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="todo-form"
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
      data-name
      class="name-input"
    />
    <v-text-field
      v-model="description"
      label="Description"
      data-description
      class="desc-input"
    />
    <v-btn
      :disabled="!valid"
      color="success"
      class="submit-button mr-4"
      @click="onSubmit"
    >
      Submit
    </v-btn>
    <v-btn
      color="primary"
      class="mr-4"
      @click="closeDialog"
    >
      Close
    </v-btn>
  </v-form>
</template>
<style lang="scss">
.notification {
  font-size: 2rem;
}
</style>
