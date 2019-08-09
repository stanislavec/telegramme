# Telegramme - simple Vue.js form to send telegram message from vue-application
***

![Now people can send you a message from your website](https://cdn1.savepice.ru/uploads/2019/8/9/b598e39589d8fe61f1a94f037a65d6c4-full.jpg)

You can send message to me by [Demo](https://stanislavec.github.io/telegramme/)

Also you can use telegramme to get messages from your site to your telegram-chatbot ;-)

Based on Telegram Api: see method [here](https://core.telegram.org/bots/api#sendmessage)

## Project setup
```
npm install
npm run serve
npm run build
npm run test
npm run lint
```
## Project setup

Install with npm: 
`npm i telegramme`

## Settings

- [X] Need to set up props for launch:

```
props: {
  title: String,
  BotApi: String, // Your Bot ID
  chatID: String, // Your Chat ID
  sendButton: String,
  repeatButton: String,
  sendFromPlaceholder: String,
  subjectPlaceholder: String,
  messagePlaceholder: String,
  successNotification: String
}
```
- [X] Need to create a chat-bot: https://tlgrm.ru/docs/bots/api#authorizing-your-bot
