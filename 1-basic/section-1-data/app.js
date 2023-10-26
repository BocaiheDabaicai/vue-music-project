const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'https://www.baidu.com',
            raw_url: '<a href="https://www.baidu.com" target="_blank">Baidu</a>',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++;
        },
        updateLastName(msg, event) {
            // event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log('Full name computed property was called!')
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
    },
    watch:{
        age(newVal,oldVal){
            setTimeout(()=>{
                this.age = 20
            },3000)
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