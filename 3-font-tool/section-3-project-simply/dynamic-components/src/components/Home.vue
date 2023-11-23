<script>
export default {
  name:"Home",
  unmounted() {
    console.log("Home Component is unmounted")
  },
  activated() {
    console.log("Home Component is activated")
  },
  deactivated() {
    console.log("Home Component is deactivated")
  }
}
</script>

<template>
<h2>Home Page</h2>
</template>

<style scoped>

</style>