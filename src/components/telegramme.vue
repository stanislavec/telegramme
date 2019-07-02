<template>
  <div 
    class="telegram-me-wrapper"
    v-bind:style="[mailMeStyle.wrapper]"
  >
    <div v-if="statusText" 
      class="notification"
      :class="{'success': success, 'error': error}"
    >
      <p>{{ statusText }}</p>
      <button 
        class="send-me"
        v-bind:style="[mailMeStyle.send]"
        @click="clearVModel()"
      > 
        {{ repeatButton }} 
      </button>
    </div>
    <div v-else class="form">
      <h2> {{ title }}</h2>
      <div class="telegram-me-field">
        <input 
          type="text" 
          class="send-to"
          name="name"
          v-model="name"
          v-validate="'required'" 
          :placeholder="sendFromPlaceholder"
          v-bind:style="[mailMeStyle.name]"
        >
      </div>
      <div class="telegram-me-field">
        <input 
          type="text" 
          name="subject"
          v-model="subject"
          class="subject"
          :placeholder="subjectPlaceholder"
          v-bind:style="[mailMeStyle.subject]"
        >
      </div>
      <div class="telegram-me-field">
        <textarea 
          name="message"
          v-model="message"
          v-validate="'required'" 
          :placeholder="messagePlaceholder"
          cols="40" 
          rows="4"
          v-bind:style="[mailMeStyle.text]"
        >
        </textarea>
      </div>
      <button 
        class="send-me"
        v-bind:style="[mailMeStyle.send]"
        :disabled="!validateForm()"
        @click="sendEmail()"
      > 
        {{sendButton}} 
      </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'telegramme',
    inject: ['$validator'],
    props: {
      title: String,
      BotApi: String,
      chatID: String,
      mailMeStyle: Object,
      sendButton: String,
      repeatButton: String,
      sendFromPlaceholder: String,
      subjectPlaceholder: String,
      messagePlaceholder: String,
      successNotification: String
    },

    data() {
      return {
        name: '',
        subject: '',
        message: '' ,
        success: false,
        error: false,
        statusText: ''
      }
    },

    methods: {
      validateForm () {
        return !this.errors.has('message') && this.message && this.name && !this.errors.has('name')
      },

      clearVModel () {
        this.name = ''
        this.subject =  ''
        this.message = ''
        this.success = false
        this.error = false
        this.statusText = ''
      },

      sendEmail () {
        axios
          .get(`https://api.telegram.org/bot${this.BotApi}/sendMessage`, {
            params: {
              chat_id: this.chatID,
              text: `Subject: ${this.subject}. Sended by ${this.name}. ${this.message}`
            }
          })
          .then((response) => {
            if (response.data && response.data.ok) {
              this.success = true
              this.statusText = this.successNotification
            }
          })
          .catch((error) => {
            this.error = true
            this.statusText = error.message
            console.log(error.message)
          })
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin: 10px 5px;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 300;
    color: #273849;
    -webkit-font-smoothing: antialiased;
  }

  .telegram-me-wrapper {
    display: flex;
    width: 350px;
    min-height: 280px;
    padding: 20px;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    display: flex;
  }

  .telegram-me-wrapper div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .telegram-me-field {
    width: 100%;
    padding: 5px 0;
  }

  input, 
  textarea {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    outline: none;
    padding: 5px 10px;
    cursor: text;
    border: 1px solid lightgrey;
  }

  textarea {
    min-width: 100%;
  }

  input::placeholder,
  textarea::placeholder {
    color: lightgrey;
    font-size: 11px;
  }

  .send-me {
    cursor: pointer;
    padding: 10px 15px;
    margin-top: 30px;
    font-weight: 400;
    min-width: 50px;
    background-color: #42b983;
    color: white;
    text-align: center;
    outline: none;
  }

  .send-me:disabled {
    opacity: 0.3;
  }

  .notification {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
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
</style>
