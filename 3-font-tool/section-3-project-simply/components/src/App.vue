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
  },
  methods:{
    updateAge(num){
      this.age += num
    },
    updateAgeBC(num){
      this.age += num
    }
  }
}

</script>

<template>
  <h3>Hey!</h3>
  <Greeting :age="age"/>
  <User :age="age" @age-change="updateAge" :ageChangeFn="updateAgeBC"/>
</template>

<style scoped>

</style>
