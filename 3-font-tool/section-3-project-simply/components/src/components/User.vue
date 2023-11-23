<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      // required: true,
      // default:20
      validate(value){

        return value < 130
      }
    },
    ageChangeFn:Function
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3)
    }
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    }
  }
}
</script>

<template>
  <button type="button" @click="onClickAge">Update Age</button>
  <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
  <!--  <p>The user is {{ age }} years olds</p>-->
  <p>The user is {{ ageDoubled }} years olds</p>
</template>

<style scoped>

</style>