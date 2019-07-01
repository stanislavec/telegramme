<template>
  <div id="app">
    <MailMe 
      :mailMeStyle="{ 
        wrapper: {

        },
        subject: {
          
        },
        text: {
          
        },
        send: {

        }
      }"
      :SMTPSettings="{
        params: {
          'Host': 'smtp.yourisp.com',
          'Username': 'username',
          'Password': 'password',
          'To': 'trashermailbox@yandex.ru'
        }
      }"
      title="MailMe!"
      sendButton='Send me!'
      sendFromPlaceholder="Enter your email..."
      subjectPlaceholder='Enter your subject...'
      messagePlaceholder='Create a message...'
    />
  </div>
</template>

<script>
import MailMe from './components/MailMe.vue'

export default {
  name: 'app',
  components: {
    MailMe
  }
}
</script>
