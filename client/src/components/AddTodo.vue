<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
    ],
    description: '',
  }),

  methods: {
    onSubmit() {
      this.$refs.form.validate();
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
  </v-form>
</template>
<style lang="">
</style>
