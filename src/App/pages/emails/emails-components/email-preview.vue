<template>
    <section>
        <div class="show-email">
            <button @click="showEmail">Pick Me</button> {{email.subject}} {{email.author}}
        <button @click="deleteEmail">Delete Me</button>
        </div>
        <!--{{email.isRead}}-->
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

<style scoped>
   
    .show-email {
        border: 1px solid black;
        padding: 5px;
        text-align: left;

    }
    
    button {
        padding: 2px;
        margin: 2px;
    }
    
    section {
        margin: 10px;
    }
</style>