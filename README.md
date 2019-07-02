# Telegramme - simple form to send message to chat
***

![Now people can send you a message from your website](https://pouch.jumpshare.com/preview/97qNtR8-NKuA9pOMbyAr9OpQdGIUqRTaPn9ecGeqbuRaRGmUVMsaga4l0Z_ayJr4K8se-eWGrrr2DtvvrEMR6RA1jQB_zmxltR5bgJ1-nls)

[Demo](https://stanislavec.github.io/telegramme/)

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
  BotApi: String,
  chatID: String,
  sendButton: String,
  repeatButton: String,
  sendFromPlaceholder: String,
  subjectPlaceholder: String,
  messagePlaceholder: String,
  successNotification: String
}
```

- [X] Need to create a chat-bot: https://tlgrm.ru/docs/bots/api#authorizing-your-bot
