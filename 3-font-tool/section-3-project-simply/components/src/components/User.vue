<script>
export default {
  name: "User",
  props: ["age"],
  methods:{
    onClickAge(){
      this.$emit('age-change')
    }
  }
}
</script>

<template>
  <button type="button" @click="onClickAge">Update Age</button>
  <p>The user is {{ age }} years olds</p>
</template>

<style scoped>

</style>