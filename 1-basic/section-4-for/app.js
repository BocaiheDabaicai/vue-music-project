const vm = Vue.createApp({
    data() {
        return {
            birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
            people: [
                {name: 'John', age: 20},
                {name: 'Rick', age: 18},
                {name: 'Amy', age: 33},
            ]
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