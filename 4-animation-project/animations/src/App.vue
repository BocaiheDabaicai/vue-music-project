<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1)
      const index = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(index, 0, num)
    },
    removeItem(index) {
      this.numbers.splice(index, 1)
    },
    beforeEnter(el) {
      console.log("beforeEnter event fired ", el)
    },
    enter(el) {
      console.log("enter event fired ", el)

      // const animation = el.animate(
      //     [{transform: "scale3D(0,0,0)"}, {}], {duration: 1000}
      // )
      // animation.onfinish = () => done()
    },
    afterEnter(el) {
      console.log("afterEnter event fired ", el)
    },
    beforeLeave(el) {
      console.log("beforeLeave event fired ", el)
    },
    leave(el) {
      console.log("leave event fired ", el)
      // done()
    },
    afterLeave(el) {
      console.log("afterLeave event fired ", el)
    },
  }
}

</script>

<template>
  <button type="button" @click="flag=!flag">Toggle</button>

  <!--  <transition name="fade" mode="out-in">-->
  <!--    <h2 v-if="flag" key="main">Hello World!</h2>-->
  <!--    <h2 v-else key="secondary">Another World!</h2>-->
  <!--  </transition>-->

  <!--  <hr/>-->

  <!--  <transition name="zoom" type="animation">-->
  <!--    <h2 v-if="flag">Hello</h2>-->
  <!--  </transition>-->

  <!--  <hr/>-->

  <!--  <transition-->
  <!--      @before-enter="beforeEnter"-->
  <!--      @enter="enter"-->
  <!--      @after-enter="afterEnter"-->
  <!--      @before-leave="beforeLeave"-->
  <!--      @leave="leave"-->
  <!--      @after-leave="afterLeave"-->
  <!--      name="fade"-->
  <!--  >-->
  <!--    <h2 v-if="flag">Hey</h2>-->
  <!--  </transition>-->
  <button type="button" @click="addItem">Add</button>
  <ul>
    <transition-group name="fade">
      <li v-for="(number,index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<style scoped>
li {
  font-size: 22px;
  cursor: pointer;
}

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: 1s all linear;
}

.fade-leave-to {
  transition: 1s all linear;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: 1s all linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: 1s all linear
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}

</style>
