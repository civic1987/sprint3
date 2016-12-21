<template>
    <section>
        <button @click="showEmail">Pick Me</button> 
        {{email.subject}} {{email.author}} {{email.isRead}}
        <button @click="deleteEmail">Delete Me</button> 
    </section>
</template>      

<script>
     export default {
        props: {
            email: {
                type: Object
            }
        },
        data(){
            return {
              
            }
        },
        methods: {
            showEmail() {
                // console.log(this.email);
                this.$emit('showEmail', this.email);
            },
            deleteEmail(){
                this.$emit('deleteEmail', this.email);
            }
        }

    }
</script>

<style></style>