const vm = Vue.createApp({
    data() {
        return {
            perspective:100,
            x:0,
            y:0,
            z:0,
        }
    },
    methods:{
        reset(){
            this.perspective = 100
            this.x = 0
            this.y = 0
            this.z = 0
        },
        async copy() {
            let text = `transform:${this.box.transform};`
            await navigator.clipboard.writeText(text)

            alert("CSS Copied to Clipboard!")
        }
    },
    computed:{
        box(){
            return {
                transform:`perspective(${this.perspective}px)
                rotateX(${this.x}deg)
                rotateY(${this.y}deg)
                rotateZ(${this.z}deg)
                `,
            }
        }
    }
}).mount('#app')