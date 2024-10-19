<template>
    <h1>All Books</h1>
    <button @click="getAllBookAPI">Get All Books</button>
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
        async getAllBookAPI(){
            try {
                const response = await axios.get('https://getallbooks-2l7homjiaq-uc.a.run.app')
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