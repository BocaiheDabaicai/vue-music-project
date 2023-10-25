const vm = Vue.createApp({
    data() {
        return {
            message: "Hello World!"
        }
    },
    // template:`{{ message }}`
    render() {
        return Vue.h('h1', this.message)
    }
})

vm.mount('#app')