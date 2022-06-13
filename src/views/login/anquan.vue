<template>
  <div class="login-container">
    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/my" class="">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: black;"> &lt; </span>
        </a>
        <span>{{ lang[lindex].tjia }}</span>
      </div>

      <div class="content">
        <div class="login__form">
          <div class="login__form-item">
            <div>{{ lang[lindex].zfdfd }}*</div>
            <input type="text" v-model="loginForm.mnemonic" :placeholder=lang[lindex].gete class="input1">
          </div>

          <div class="login__form-item">
            <div> {{ lang[lindex].pwd }} *</div>
            <input type="text" v-model="loginForm.Safetypwd" :placeholder=lang[lindex].aassds class="input1">
          </div>
          <button class="login-btn" @click="update()">
            <b>  {{ lang[lindex].huifuui }} </b>
          </button>
        </div>
      </div>
      <FOOTER/>
    </div>
  </div>
</template>

<script>
import FOOTER from '@/views/login/footerCommon'
import { getassets, userminer, Security } from '@/api/user'

export default {
  components: {
    FOOTER
  },
  data() {
    return {
      loginForm: {
        mnemonic: '',
        Safetypwd: ''
      },
      lindex: 'en',
      lang: {
        zh:{
          tjia: '安全中心',
          zfdfd: '助記詞',
          gete: '輸入空格以分隔助力記詞',
          pwd: '密碼',
          aassds: '設置新密碼',
          huifuui: '恢復設置',
          cengong: '操作成功',
        },
        en:{
          tjia: 'Security Center',
          zfdfd: 'Boosters',
          gete: 'Enter spaces to separate booster words',
          pwd: 'Password',
          aassds: 'Set a new password',
          huifuui: 'Restore settings',
          cengong: 'Successful operation',
        },
        it:{
          tjia: 'Centro di sicurezza',
          zfdfd: 'BONUS',
          gete: 'Inserire gli spazi per separare le parole di richiamo',
          pwd: 'Password',
          aassds: 'Impostare una nuova password',
          huifuui: 'Ripristino delle impostazioni',
          cengong: 'Operazione di successo',
        },
        de:{
          tjia: 'Sicherheitszentrum',
          zfdfd: 'BONUSES',
          gete: 'Leerzeichen zur Trennung von Booster-Wörtern eingeben',
          pwd: 'Passwort',
          aassds: 'Ein neues Passwort festlegen',
          huifuui: 'Einstellungen wiederherstellen',
          cengong: 'Erfolgreiche Operation',
        },
      }
    }
  },
  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },
  methods: {
    update() {
      Security(this.loginForm).then(result => {
        if (result[0] == true) {
          this.$message.success(this.lang[this.lindex].cengong)
        } else {
          this.$message.error(result[0])
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  box-sizing: border-box;
  padding-top: 70px;
  float: left;
}

.toubu {
  color: black;
  background-color: #fff;
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
