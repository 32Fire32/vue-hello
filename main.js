'strict mode'

const { createApp } = Vue

createApp({
    data() {
        return {
            datapage: {
                message: "Questo è il mio primo utilizzo di Vue :')",
                image: "https://avatars.githubusercontent.com/u/6128107?s=200&v=4",
                imageArray: ["img/dog1.jpg", "img/dog2.jpg", "img/dog3.jpg"],
                hid: false
            },
            methods: {
                hidden(){                 
                    this.hid = true;
                    console.log(hid);
                    console.log(this.hid);
                }
            }
            
        }
    }
}).mount('#app')