const vm = Vue.createApp({
    data() {
        return {
            message: "Hello World!"
        }
    },
})

vm.mount('#app')

// setTimeout(() => {
//     vm.mount('#app')
// }, 3000)