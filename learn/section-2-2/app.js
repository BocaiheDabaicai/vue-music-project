const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
        }
    },
    computed: {
        circle_classes() {
            return {purple: this.isPurple}
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'LeBron';
// }, 2000)

// Vue.createApp({
//     data(){
//         return {
//             firstName:'John',
//             lastName:'Doe'
//         }
//     }
// }).mount('#app1')