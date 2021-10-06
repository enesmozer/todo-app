<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [(v) => !!v || 'Name is required'],
    description: '',
    snackbar: false,
    isTop: true,
  }),

  methods: {
    ...mapActions(['addTodo']),
    onSubmit() {
      if (this.valid) {
        this.addTodo({
          name: this.name,
          description: this.description,
        }).then(() => {
          this.$refs.form.reset();
          this.snackbar = true;
        });
      }
    },
  },
};
</script>
<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    />
    <v-textarea
      name="input-7-1"
      v-model="description"
      label="Description"
    />
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="onSubmit"
    >
      Submit
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      color="success"
      :top="isTop"
      content-class="notification"
    >
      Operation Successfull
    </v-snackbar>
  </v-form>
</template>
<style lang="scss">
.notification {
  font-size: 2rem;
}
</style>
