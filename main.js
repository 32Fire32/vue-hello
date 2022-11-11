'strict mode'

const { createApp} = Vue

createApp({
    data() {
        return {
            message: "Questo è il mio primo utilizzo di Vue :')"
        }
    }
}).mount('#app')