<template>
  <div class="login-container">
    <div style="border-bottom: 0.01rem solid #eee; font-size: 22px; color: #669cec; text-align: right; padding: 10px;">
      <router-link to="/register"> {{ lang[lindex].title }}</router-link>
    </div>
    <div class="login__title">
      <p style="margin-top: -5px; font-size: 30px; font-weight: bolder;"> {{ lang[lindex].btn }} </p>
      <p style="color: rgb(106, 103, 103); margin-top: -15px;">{{ lang[lindex].rmbtn }}</p>
    </div>

    <div class="login__form">
      <div class="login__form-item">
        <div>{{ lang[lindex].shoujihao }} *</div>
        <input v-model="loginForm.username" type="text" :placeholder=lang[lindex].qingshr class="input1 username"></div>
      <div class="login__form-item">
        <div>{{ lang[lindex].pwd }}*</div>
        <input v-model="loginForm.password" type="password" :placeholder=lang[lindex].srmi class="input1">
      </div>
      <div class="login__form-btn"></div>
      <button class="login-btn" @click="douserlogin()"><b> {{ lang[lindex].btn }}</b></button>
    </div>
  </div>
</template>

<script>
import { userlogin } from '@/api/user'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      lindex: 'en',
      lang: {
        en: {
          title: 'Register',
          btn: 'Login',
          rmbtn: 'Choose your cell phone number to register according to your needs',
          shoujihao: 'Mobile Number',
          qingshr: 'Please enter your cell phone number',
          pwd: 'Password',
          srmi: 'Please enter your password',
          cutishi: 'Incorrect username or password',
          succcurlyeq: 'Login successfully, Jumping...',
          Has_log: 'Logged'
        },
        zh: {
          title: '註冊',
          btn: '登錄',
          rmbtn: '根據你的需要選擇手機號登錄',
          shoujihao: '手機號',
          qingshr: '請輸入手機號',
          pwd: '密碼',
          srmi: '請輸入密碼',
          cutishi: '用户名或密码错误',
          succcurlyeq: '登录成功, 跳转中...',
          Has_log: '已登錄'
        },
        it: {
          title: 'Registrazione',
          btn: 'Accesso',
          rmbtn: 'Scegliere un numero di cellulare per accedere in base alle proprie esigenze',
          shoujihao: 'Numero di cellulare',
          qingshr: 'Inserire il numero di cellulare',
          pwd: 'Password',
          srmi: 'Inserire la password',
          cutishi: 'Nome utente o password errati',
          succcurlyeq: 'Accesso riuscito, Salta su...',
          Has_log: 'Registrato'
        },
        de: {
          title: 'Anmeldung',
          btn: 'Anmeldung',
          rmbtn: 'Wählen Sie eine Mobiltelefonnummer zum Einloggen nach Ihren Bedürfnissen',
          shoujihao: 'Handynummer',
          qingshr: 'Bitte geben Sie Ihre Mobiltelefonnummer ein',
          pwd: 'Passwort',
          srmi: 'Bitte geben Sie Ihr Passwort ein',
          cutishi: 'Falscher Benutzername oder falsches Passwort',
          succcurlyeq: 'Anmeldung erfolgreich, Spring rein...',
          Has_log: 'Eingeloggt'
        }
      }
    }
  },

  created() {
    this.lindex = window.localStorage.getItem('lang')
  },

  methods: {
    douserlogin() {
      userlogin(this.loginForm).then(result => {
        if (result[0] == true) {

          this.$message.success(this.lang[this.lindex].succcurlyeq)
          window.localStorage.setItem('usertoken', result[1].token)
          window.localStorage.setItem('UserName', result[1].UserName)
          window.localStorage.setItem('userid', result[1].userid)

          setTimeout(() => {
            this.$router.push('/home')
          }, 3000)

        } else {
          this.$message.error(this.lang[this.lindex].cutishi)
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
  background-color: #f6f8f9 !important;
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
