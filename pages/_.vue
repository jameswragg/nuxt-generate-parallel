<template>
  <h1>{{name}}</h1>
</template>

<script>
export default {
  async asyncData({ payload }) {
    if (payload) {
      // Payload should be passed via nuxt's `.generate()` and contain:
      console.log('Payload hit! name:', payload.name);
      return payload;
    }
  },
  head() {
    return {
      title: `${this.name}`
    }
  },
}
</script>

<style>

</style>
