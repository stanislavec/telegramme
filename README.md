# Telegramme - simple Vue.js form to send telegram message from vue-application
***

![Now people can send you a message from your website](https://i.postimg.cc/NF6QJdbk/2019-09-18-10-32-44.png)

You can send message to me by [Demo](https://stanislavec.github.io/telegramme/)

Also you can use telegramme to get messages from your site to your telegram-chatbot ;-)

Based on Telegram Api: see method [here](https://core.telegram.org/bots/api#sendmessage)

## Project setup

- [X] Install with npm: 
```
npm i telegramme
```

- [X] Import component in your project: 
```
import TelegramMe from 'telegramme/src/components/telegram-me'
```

- [X] Init component in your project: 
```
export default {
  name: 'your-app',
  components: {
    TelegramMe
  }
}
```

- [X] Set TelegramMe component: 
```
<TelegramMe
  BotApi=String // Your Bot ID
  chatID=String // Your Chat ID
  title=String
  sendButton=String
  repeatButton=String
  sendFromPlaceholder=String
  subjectPlaceholder=String
  messagePlaceholder=String
  successNotification=String
/>
```

## Settings
- [X] Need to create a chat-bot: https://tlgrm.ru/docs/bots/api#authorizing-your-bot
