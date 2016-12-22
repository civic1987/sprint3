<template>
    <section>
        <form>
            Subject: <input type="text" v-model="email.subject">
             To: <input type="email" v-model="email.author">
              Desc: <input type="textarea" v-model="email.body">
                <button @click.prevent="save">Save</button>
        </form>

    </section>
</template>


<script>
    export default {
         props: {
            emails: {
                type: Array
            }
        },
        data() {
            return {
                email: {
                subject: '', 
                author: '',
                body:''
                 }
            }
        },
       
        methods: {
           save(){
               this.emails.push(this.email)
           }
    }
    }
</script>

<style scoped>

</style>