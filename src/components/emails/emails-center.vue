<template>
  <div id="app">
   <h1>{{title}}</h1>
   <email-list :emails="emails" @showEmail="showEmail" @deleteEmail="deleteEmail"></email-list>
   <hr>
   <email-details :email="email"></email-details>
   <email-status :numberOfReadEmails="numberOfReadEmails" :numberOfEmails="emails.length"></email-status>
  </div>
</template>

<script>

import EmailList from './emails/email-list.vue'
import EmailDetail from './emails/email-details.vue'
import EmailStatus from './emails/email-status.vue'

export default {
    data() {
        return {
          title: 'Welcome Email Doc',
             emails: [
                    {id: 1,subject: 'subject 1',author: 'X', body: 'Hello 1', isRead: false},
                    {id: 2,subject: 'subject 2',author: 'Y', body: 'Hello 2', isRead: false},
                    {id: 3,subject: 'subject 3',author: 'Z', body: 'Hello 3', isRead: false}
                ],
                email:{},
                numberOfEmails:0,
                numberOfReadEmails:0
        }
    },
    components: {
        'email-list' : EmailList,
        'email-details' : EmailDetail,
        'email-status' : EmailStatus
    },
    methods: {
      showEmail(email) {
        this.email = email;
        if(this.email.isRead === false){
          this.numberOfReadEmails ++
        }
        else {
          this.numberOfReadEmails --
        }
        this.email.isRead = !this.email.isRead;

      },
      deleteEmail(currEmail) {
        this.emails = this.emails.filter(email => email !== currEmail);
        this.email = {};
        if(this.numberOfReadEmails > 0){
        this.numberOfReadEmails --
          }
        }
    }
}
</script>

<style>
#app {
  background-color: lightblue;
}
</style>
