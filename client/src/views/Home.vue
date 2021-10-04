<template>
  <div class="home">
    <div class="title">
      Welcome to Todo List
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {},
};
</script>
<style lang="scss" scoped>
.home {
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem !important;
        margin-block: 5rem;
        height: 5rem;
    }
}
</style>
