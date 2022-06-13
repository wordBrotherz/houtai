<template>
  <div class="login-container">
    <div style="border-bottom: 0.01rem solid #eee; font-size: 22px;color: #669cec;text-align: right;padding: 10px;">
      <router-link to="/login"> {{ lang[lindex].btn }}</router-link>
    </div>

    <div class="login__title">
      <p style="margin-top: -5px; font-size: 30px; font-weight: bolder;"> {{ lang[lindex].title }}</p>
      <p style="color: rgb(106, 103, 103); margin-top: -15px;">  {{ lang[lindex].rmbtn }}</p>
    </div>

    <div class="login__form">
      <div class="login__form-item">
        <div>{{ lang[lindex].shoujihao }}*</div>
        <input type="text" :placeholder=lang[lindex].qingshr class="input1" v-model="data.username">
      </div>

      <div class="login__form-item">
        <div>{{ lang[lindex].pwd }}*</div>
        <input type="password" :placeholder=lang[lindex].srmi class="input1" v-model="data.password">
      </div>

      <div class="login__form-item">
        <div>{{ lang[lindex].yaoqingma }} *</div>
        <input type="text" :placeholder=lang[lindex].qwed class="input1" v-model="data.code">
      </div>

      <button class="login-btn" @click="doRegister()">
        <b>{{ lang[lindex].title }}</b>
      </button>
    </div>
  </div>
</template>

<script>
import { userregister } from '@/api/user'

export default {
  name: 'Login',
  data() {
    return {
      data: {
        username: '',
        password: '',
        code: ''
      },
      lindex: 'en',
      lang: {
        zh: {
          btn: '登錄',
          title: '註冊',
          rmbtn: '註冊過程中，請牢記您的備份助記詞，確保備份正確，若丟失無法找回您的賬號和資金',
          qwed: '請輸入邀請碼',
          shoujihao: '手機號',
          qingshr: '請輸入手機號',
          pwd: '密碼',
          srmi: '請輸入密碼',
          succcurlyeq: '注册成功请登录',
          user_exists: '用戶已存在',
          yaoqingma: '邀請碼',
        },
        en: {
          title: 'Register',
          btn: 'Login',
          rmbtn: 'During the registration process, please remember your backup helper to make sure the backup is correct, if you lose your account number and funds, you will not be able to retrieve them.',
          qwed: 'Please enter the invitation code',
          shoujihao: 'Mobile Number',
          qingshr: 'Please enter your cell phone number',
          pwd: 'Password',
          srmi: 'Please enter your password',
          succcurlyeq: 'Login successfully, Jumping...',
          user_exists: 'User already exists',
          yaoqingma: 'Invitation Code',
        },
        it: {
          btn: 'Accesso',
          title: 'Registrazione',
          rmbtn: 'Durante il processo di registrazione, ricordatevi di assicurarvi che i vostri backup siano corretti, poiché non c\'è modo di recuperare il vostro numero di conto e i vostri fondi in caso di perdita.',
          qwed: 'Inserire il codice di invito',
          shoujihao: 'Numero di cellulare',
          qingshr: 'Inserire il numero di cellulare',
          pwd: 'Password',
          srmi: 'Inserire la password',
          succcurlyeq: 'Effettuare il login se si è registrati',
          user_exists: 'L\'utente esiste già',
          yaoqingma: 'Codice invito',
        },
        de: {
          btn: 'Anmeldung',
          title: 'Anmeldung',
          rmbtn: 'Bitte denken Sie während des Registrierungsprozesses an Ihren Backup-Helfer, um sicherzustellen, dass Ihre Backups korrekt sind, da es keine Möglichkeit gibt, Ihre Kontonummer und Ihr Guthaben wiederherzustellen, wenn diese verloren gehen.',
          qwed: 'Bitte geben Sie den Einladungscode ein',
          shoujihao: 'Handynummer',
          qingshr: 'Bitte geben Sie Ihre Mobiltelefonnummer ein',
          pwd: 'Passwort',
          srmi: 'Bitte geben Sie Ihr Passwort ein',
          succcurlyeq: 'Bitte melden Sie sich an, wenn Sie sich registriert haben',
          user_exists: 'Benutzer existiert bereits',
          yaoqingma: 'Einladungscode',
        }
      }
    }
  },

  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },

  methods: {
    doRegister() {
      userregister(this.data.username, this.data.password, this.data.code).then(result => {
        if (result[0] == true) {
          this.$message.success(this.lang[this.lindex]['succcurlyeq'])
          this.$router.push('/login')
        } else {
          let mes = result[0];
          this.$message.error(this.lang[this.lindex][mes])
        }
      })
    }
  }
}
</script>

<style lang="scss">
#app, body, html {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #f6f8f9;
  font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
}

.login__title {
  padding: 25px;
  padding-bottom: 6px !important;
}

.login__form {
  padding: 25px;
}

.input1 {
  width: 100%;
  height: 45px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-top: 10px;
  margin-bottom: 20px;
  text-indent: 10px;
  font-size: 17px;
}

.login-btn {
  width: 100%;
  height: 55px;
  border-radius: 40px;
  border: none;
  background-color: #669cec;
  color: #fff;
  font-size: 15px;
  margin-top: 20px;
}
</style>
