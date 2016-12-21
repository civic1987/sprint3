<template>
<section>
        <h1>Email Status</h1>
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