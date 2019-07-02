<template>
  <div id="app" class="app">
    <telegramme 
      :mailMeStyle='{ 
        wrapper: {

        },
        name: {

        },
        subject: {
          
        },
        text: {
          
        },
        send: {

        }
      }'
      BotApi='786698677:AAH0nMPQtXQDF_ZEw2w5tA68kno91JQJ_TI'
      chatID="-1001303367026"
      title='Telegram me!'
      sendButton='Send me!'
      repeatButton="Send again"
      sendFromPlaceholder='Enter your name...'
      subjectPlaceholder='Enter your subject...'
      messagePlaceholder='Create a message...'
      successNotification="Great! I will see your message ;-)"
    />
  </div>
</template>

<script>
import telegramme from './components/telegram-me.vue'

export default {
  name: 'app',
  components: {
    telegramme
  }
}
</script>
<style scoped>
  .app {
    display: flex;
    justify-content: center;
    padding: 10%;
  }
</style>
