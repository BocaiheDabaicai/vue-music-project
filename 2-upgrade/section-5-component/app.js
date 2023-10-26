const vm = Vue.createApp({
    data() {}
})

vm.component('hello', {
    template: `<h1>{{ message }}</h1>`,
    data() {
        return {
            message: 'Hello World!'
        }
    }
})

vm.mount('#app')