<template>
     <section>
        <h1>Email List</h1>
        <ul>
            <li v-for="(currEmail, idx) in emails">
                <email-preview :email="currEmail" @showEmail="showEmail" @deleteEmail="deleteEmail">
                
                </email-preview>
            </li>
        </ul>
    </section>
</template>      

<script>
    import EmailPreview from './email-preview.vue'
    export default {
        props: {
            emails: {
                type: Array
            }
        },
        data(){
            return {
               
            }
        },
        components: {
            'email-preview' : EmailPreview
        },
        methods: {
            showEmail(email){
                this.$emit('showEmail', email);
            },
            deleteEmail(email){
                this.$emit('deleteEmail', email);
        }
    

    }
    }
</script>

<style></style>