'strict mode'

const { createApp} = Vue

createApp({
    data() {
        return {
            message: "Questo è il mio primo utilizzo di Vue :')",
            image: "https://avatars.githubusercontent.com/u/6128107?s=200&v=4"
        }
    }
}).mount('#app')