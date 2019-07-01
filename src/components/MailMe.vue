<template>
  <div 
    class="mail-me-wrapper"
    v-bind:style="[mailMeStyle.wrapper]"
  >
    <h2> {{ title }}</h2>
    <div class="mail-me-field">
      <input 
        type="text" 
        class="send-to"
        name="email"
        v-model="email"
        v-validate="'required|email'" 
        :placeholder="sendFromPlaceholder"
        v-bind:style="[mailMeStyle.email]"
      >
    </div>
    <div class="mail-me-field">
      <input 
        type="text" 
        name="subject"
        v-model="subject"
        class="subject"
        :placeholder="subjectPlaceholder"
        v-bind:style="[mailMeStyle.subject]"
      >
    </div>
    <div class="mail-me-field">
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
</template>

<script>
export default {
  name: 'MailMe',
  inject: ['$validator'],
  props: {
    title: String,
    SMTPSettings: Object,
    mailMeStyle: Object,
    sendButton: String,
    sendFromPlaceholder: String,
    subjectPlaceholder: String,
    messagePlaceholder: String
  },

  data() {
    return {
      email: '',
      subject: '',
      message: ''    
    }
  },

  methods: {
    validateForm () {
      return !this.errors.has('message') && this.message && this.email && !this.errors.has('email')
    },

    sendEmail () {
      let params = Object.assign(this.SMTPSettings.params, {
        From: this.email,
        Subject: this.subject,
        Body: this.message
      })
      Email.send(params).then(
        message => alert(message)
      )
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

  .mail-me-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    padding: 20px;
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
  }

  .mail-me-field {
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

  input::placeholder,
  textarea::placeholder {
    color: lightgrey;
    font-size: 11px;
  }

  .send-me {
    cursor: pointer;
    padding: 10px 15px;
    font-weight: 400;
    background-color: #42b983;
    color: white;
    text-align: center;
    outline: none;
  }

  .send-me:disabled {
    opacity: 0.3;
  }
</style>
