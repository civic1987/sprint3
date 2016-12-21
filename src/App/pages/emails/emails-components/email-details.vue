<template>
<section>
    <p>
        {{email.subject}} {{email.author}} {{email.body}}
    </p>
</section>

</template>

<script>
export default {
    props:{
        email:{
            type: Object
        }
    },
        data(){
            return {
              
            }
        }
}

</script>

<style>


</style>
