import { createApp } from 'vue'
import App from './App.vue'
// 全局组件注册与使用
// import Greeting from "@/components/Greeting.vue";


let vm = createApp(App)
vm
    // .component('Greeting',Greeting)
    .mount('#app')
