<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";

// 该属性不必要，主要用于调试视图
export default {
  name: "App",
  components: {Greeting, User},
  data() {
    return {
      age: 20
    }
  }
}

</script>

<template>
  <h3>Hey!</h3>
  <Greeting :age="age"/>
  <User :age="age" @age-change="age++"/>
</template>

<style scoped>

</style>
