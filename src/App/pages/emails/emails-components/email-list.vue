<template>
    <section>
        <div class="email-list">
            <h1>Email List</h1>
            <button @click="createNewMail">Compose new mail</button>
            <ul>
                <li v-for="(currEmail, idx) in emails">
                    <email-preview :email="currEmail" @showEmail="showEmail" @deleteEmail="deleteEmail">

                    </email-preview>
                  
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import EmailPreview from './email-preview.vue'
    import EmailCompose from './email-compose.vue'
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
            'email-preview' : EmailPreview,
            'email-compose' : EmailCompose
        },
        methods: {
            showEmail(email){
                this.$emit('showEmail', email);
        },
            deleteEmail(email){
                this.$emit('deleteEmail', email);
        },
            createNewMail(){
                // console.log(Object.keys(this.emails[0]))
        }
    

      }   
    }   
</script>

<style scoped>
    .email-list {
        /*height: 100%;*/
    }
    
    button {
        padding: 2px;
        margin: 10px;
    }
    
    ul {
        list-style-type: none;
    }
    
    h1 {
        text-align: center;
    }
</style>