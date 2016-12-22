<template>
  <div id="app">
    <h1>{{title}}</h1>
          <email-compose :emails="emails"></email-compose>
    <div class="flex">
      <div class="email-list">
        <email-list :emails="emails" @showEmail="showEmail" @deleteEmail="deleteEmail"></email-list>
      </div>
      <div class="email-details">
        <email-details :email="email"></email-details>
      </div>
    </div>
      <div class="email-status">
        <email-status :numberOfReadEmails="numberOfReadEmails" :numberOfEmails="emails.length"></email-status>
      </div>


  </div>
</template>

<script>

import EmailList from './emails-components/email-list.vue'
import EmailDetail from './emails-components/email-details.vue'
import EmailStatus from './emails-components/email-status.vue'
import EmailCompose from './emails-components/email-compose.vue'

export default {
    data() {
        return {
          title: 'Welcome Email Doc',
             emails: [
                    {id: 1,subject: 'subject 1',author: 'Xwe', body: 'qwerqewrqewrqwerqwerqwer', isRead: false},
                    {id: 2,subject: 'subject 2',author: 'Ysad', body: 'weqrqewrwqerqwerqwerwqerwqer', isRead: false},
                    {id: 3,subject: 'subject 3',author: 'Zasd', body: 'wqerqwreqwrqwerwqerwerqwer', isRead: false},
                    {id: 2,subject: 'subject 4',author: 'Yasd', body: 'qwerqewrwqerqwerqewrqewr', isRead: false},
                    {id: 2,subject: 'subject 5',author: 'Yss', body: 'qwerwqerqewreqwrwqerwqerqewr', isRead: false},
                    {id: 2,subject: 'subject 6',author: 'Ydwqe', body: 'wqerwqereqwrqewrqewreqwr', isRead: false},
                    {id: 2,subject: 'subject 7',author: 'Yrrr', body: 'qwerqewrwqerqwerwqer', isRead: false},
                    // {id: 2,subject: 'subject 8',author: 'Yzxc', body: 'qwerqewrqwerqewrwqerqewrewq', isRead: false},
                    // {id: 2,subject: 'subject 9',author: 'Yqwe', body: 'weqrqwerqwerqwereqwrqweeqwrqwerwq', isRead: false},
                    // {id: 2,subject: 'subject 10',author: 'Yqwe', body: 'Hqwerwqerqwerqwerwqerqewrwqer', isRead: false},
                    // {id: 2,subject: 'subject 11',author: 'Ywrgg', body: 'werqwerqewrqwerqwerwqerweqrwqe', isRead: false}
                ],
                email:{},
                numberOfEmails:0,
                numberOfReadEmails:0
        }
    },
    components: {
        'email-list' : EmailList,
        'email-details' : EmailDetail,
        'email-status' : EmailStatus,
        'email-compose' : EmailCompose
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
  
  .flex {
    display: flex;
    height: 100%;
  }

  .email-list{
    background-clip: red;
    height: 100%;
    border: 1px dashed black;
  }

  .email-details{
    float: right;
    
  }


  .email-status{
    bottom:0;
    border: 1px solid black;
    
  }
</style>