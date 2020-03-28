<template>
  <div id="app" class="app">
    <telegramme
      :BotApi="BotApi"
      :chatID="chatID"
      :title="title"
      :sendButton="sendButton"
      :repeatButton="repeatButton"
      :sendFromPlaceholder="sendFromPlaceholder"
      :subjectPlaceholder="subjectPlaceholder"
      :messagePlaceholder="messagePlaceholder"
      :successNotification="successNotification"
    />
  </div>
</template>

<script>
import telegramme from './components/telegram-me.vue';

export default {
  name: 'app',
  components: {
    telegramme,
  },

  data() {
    return {
      BotApi: process.env.VUE_APP_BOTAPI,
      chatID: process.env.VUE_APP_CHATID,
      title: process.env.VUE_APP_FORMTITLE,
      sendButton: process.env.VUE_APP_SENDBUTTON,
      repeatButton: process.env.VUE_APP_REPEATBUTTON,
      sendFromPlaceholder: process.env.VUE_APP_SENDFORMPLACEHOLDER,
      subjectPlaceholder: process.env.VUE_APP_SUBJECTPLACEHOLDER,
      messagePlaceholder: process.env.VUE_APP_MESSAGEPLACEHOLDER,
      successNotification: process.env.VUE_APP_SUCCESSNITIFICATION,
    };
  },
};
</script>
<style scoped>
.app {
  display: flex;
  justify-content: center;
  padding: 10%;
}
</style>
