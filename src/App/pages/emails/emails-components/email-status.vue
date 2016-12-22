<template>
<section>
        <h2>Email Status</h2>
            <div>     
          {{numberOfReadEmails}} {{numberOfEmails}}
            </div>
    </section>

</template>

<script>

    export default {
        props: {
            numberOfEmails: {
                type: Number
            },
            numberOfReadEmails: {
                
            }
        },
        data(){
            return {
              
            }
        }
    }


</script>


<style scoped> 
    h2 {
        color: orange;
    }
</style>