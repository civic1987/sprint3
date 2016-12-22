<template>
    <section>
        <div class="email-details">
        <h1> Email Details </h1>
        <h3> {{email.subject}} </h3>
        <p> {{email.author}} </p>
        
           <div class="email-body"> {{email.body}} </div>
        </div>

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

<style scoped>
    .email-details {
        width: 900px;   
        height: 740px;
        /*height: 100%;*/
        /*width: 100%;*/
        border: 1px solid black;
        margin: 5px;
        padding: 10px;
    }
    h1 {
        text-align: center;
        margin:10px;
    }

    h3{
        width: 100%;
        border: 1px solid black;
        margin: 5px;
        padding: 5px;
    }
      p{
        width: 100%;
        border: 1px solid black;
        margin: 5px;
        padding: 5px;
    }

    .email-body{
        width: 100%;
        margin: 5px;
        padding: 5px;
        font-size: 18px;

    }

</style>