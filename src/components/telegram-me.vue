<template>
  <div class="telegram-me-wrapper">
    <div v-if="statusText" class="notification" :class="{ success, error }">
      <p>{{ statusText }}</p>
      <button class="send-me" @click="clearVModel()">
        {{ repeatButton }}
      </button>
    </div>
    <div v-else-if="preloader" class="transition-loader">
      <div class="transition-loader-inner">
        <div v-for="n in 6" :key="n"></div>
      </div>
    </div>
    <div v-else class="form">
      <div class="t-me__header">
        <div class="logo"></div>
        <h2>{{ title }}</h2>
      </div>
      <div class="telegram-me-field">
        <input
          type="text"
          class="send-to"
          name="name"
          v-model="name"
          :placeholder="sendFromPlaceholder"
        />
      </div>
      <div class="telegram-me-field">
        <input type="text" name="subject" class="subject" :placeholder="subjectPlaceholder" />
      </div>
      <div class="telegram-me-field">
        <textarea
          name="message"
          v-model="message"
          :placeholder="messagePlaceholder"
          cols="40"
          rows="4"
        >
        </textarea>
      </div>
      <button class="send-me" :disabled="!validateForm()" @click="sendEmail()">
        {{ sendButton }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'telegram-me',
  props: {
    title: String,
    BotApi: String,
    chatID: String,
    sendButton: String,
    repeatButton: String,
    sendFromPlaceholder: String,
    subjectPlaceholder: String,
    messagePlaceholder: String,
    successNotification: String,
  },

  data() {
    return {
      name: '',
      subject: '',
      message: '',
      success: false,
      error: false,
      statusText: '',
      preloader: false,
    };
  },

  methods: {
    validateForm() {
      return this.message && this.name;
    },

    clearVModel() {
      this.name = '';
      this.subject = '';
      this.message = '';
      this.success = false;
      this.error = false;
      this.statusText = '';
    },

    sendEmail() {
      this.preloader = true;
      axios
        .get(`https://api.telegram.org/bot${this.BotApi}/sendMessage`, {
          params: {
            chat_id: this.chatID,
            text: this.subject
              ? `Author: ${this.name}\n  \nSubject: ${this.subject}\n${this.message}`
              : `Author: ${this.name}\n  \n${this.message}`,
          },
        })
        .then((response) => {
          if (response.data && response.data.ok) {
            this.success = true;
            this.statusText = this.successNotification;
          }
        })
        .catch((error) => {
          this.error = true;
          this.statusText = error.message;
          console.log(error.message);
        })
        .finally(() => {
          this.preloader = false;
        });
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  color: #273849;
  -webkit-font-smoothing: antialiased;
}

.telegram-me-wrapper {
  display: flex;
  width: 350px;
  min-height: 280px;
  padding: 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 1);
  display: flex;
  border-radius: 10px;
}

.notification,
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.t-me__header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: 60px;
  margin-bottom: 20px;
}

.logo {
  flex-basis: 20%;
  height: 50px;
  background-image: url('./../assets/t_logo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.telegram-me-field {
  width: 100%;
  padding: 5px 0;
}

input,
textarea {
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  outline: none;
  padding: 10px;
  cursor: text;
  border: 1px solid lightgrey;
}

textarea {
  min-width: 100%;
  min-height: 200px;
}

input::placeholder,
textarea::placeholder {
  color: lightgrey;
  font-size: 14px;
}

.send-me {
  display: inline-block;
  vertical-align: top;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  outline: none;
  border: unset;
  color: #fff;
  border-color: #357ebd;
  padding: 10px 14px;
  min-width: 225px;
  font-size: 15px;
  line-height: 2;
  border-radius: 30px;
  background-color: #1d98dc;
  margin-top: 30px;
}

.send-me:disabled {
  opacity: 0.3;
}

.notification {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

.error {
  background-color: #ee5d5c;
  color: white;
  text-transform: uppercase;
}

.success {
  background-color: #42b983;
  color: white;
  text-transform: uppercase;
}

.transition-loader {
  width: 100%;
  display: flex;
  justify-content: center;
}

.transition-loader-inner {
  overflow: hidden;
  align-items: center;
  display: flex;
}

.transition-loader-inner div {
  padding: 3px;
  margin: 10px;
  background: #1d98dc;
  display: inline-block;
}

.transition-loader-inner div:nth-child(1) {
  -webkit-animation: loader 3s 600ms infinite ease-in-out;
  animation: loader 3s 600ms infinite ease-in-out;
}
.transition-loader-inner div:nth-child(2) {
  -webkit-animation: loader 3s 500ms infinite ease-in-out;
  animation: loader 3s 500ms infinite ease-in-out;
}
.transition-loader-inner div:nth-child(3) {
  -webkit-animation: loader 3s 400ms infinite ease-in-out;
  animation: loader 3s 400ms infinite ease-in-out;
}
.transition-loader-inner div:nth-child(4) {
  -webkit-animation: loader 3s 300ms infinite ease-in-out;
  animation: loader 3s 300ms infinite ease-in-out;
}
.transition-loader-inner div:nth-child(5) {
  -webkit-animation: loader 3s 200ms infinite ease-in-out;
  animation: loader 3s 200ms infinite ease-in-out;
}
.transition-loader-inner div:nth-child(6) {
  -webkit-animation: loader 3s 100ms infinite ease-in-out;
  animation: loader 3s 100ms infinite ease-in-out;
}

@keyframes loader {
  0% {
    opacity: 0;
    transform: translateX(-300px) scale(1);
  }
  33% {
    opacity: 1;
    transform: translateX(0px) scale(2);
  }
  66% {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(300px) scale(2);
  }
}

@-webkit-keyframes loader {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  66% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(300px);
  }
}
</style>
