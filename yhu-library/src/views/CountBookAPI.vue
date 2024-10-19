<template>
    <h1>Book Counter</h1>
    <button @click="getBookCountAPI">Get Book Count</button>
    <p v-if="jsondata !== null">{{ jsondata }}</p>
    <p v-if="error">{{ error }}</p>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            jsondata: null,
            error: null
        }
    },
    methods: {
        async getBookCountAPI(){
            try {
                const response = await axios.get('https://countbooks-2l7homjiaq-uc.a.run.app')
                this.jsondata = response.data
                this.error = null
            }
            catch (error){
                console.error('Error fetching book count:', error)
                this.error = error
                this.count = null
            }
        }
    }
}
</script>