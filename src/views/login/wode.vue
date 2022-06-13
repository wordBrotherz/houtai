<template>
  <div class="login-container">
    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/" class="router-link-active">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px;"> &lt; </span>
        </a>
        <span>{{ lang[lindex].wode }}</span>
      </div>

      <div class="content">
        <div class="liebiao m-t-15">
          <a href="https://wa.me/4314098379" class="">
            <div class="lie-2"><b> {{ lang[lindex].llkkk }} </b></div>
          </a>
        </div>

        <div class="liebiao m-t-15">
          <a href="#/security" class="">
            <div class="lie-2">
              <b>{{ lang[lindex].aaad }}</b>
            </div>
          </a>
        </div>

        <div class="liebiao m-t-15">
          <a href="#/languange" class="">
            <div class="lie-2"><b> {{ lang[lindex].tinis }} </b></div>
          </a>
        </div>

        <div class="liebiao m-t-15">
          <a href="#/address" class="">
            <div class="lie-2"><b> {{ lang[lindex].sd }} </b></div>
          </a>
        </div>

        <div class="liebiao m-t-15">
          <a href="#/tixian" class="">
            <div class="lie-2"><b> {{ lang[lindex].sted }} </b></div>
          </a>
        </div>

        <div class="liebiao dengchu m-t-15">
          <div class="lie-2">
            <b style="color: white;" @click="logout()">{{ lang[lindex].teteee }}</b>
          </div>
        </div>
      </div>
      <FOOTER/>
    </div>
  </div>
</template>

<script>
import FOOTER from '@/views/login/footerCommon'

export default {
  components: {
    FOOTER
  },
  data() {
    return {
      loginForm: {
        adminuser: '',
        password: ''
      },
      lindex: 'en',
      lang: {
        zh: {
          wode: '我的',
          llkkk: '聯繫客服',
          aaad: '安全中心',
          sd: '支付地址',
          sted: '提現',
          teteee: '退出登錄',
          tinis: '选择语言'
        },
        en: {
          wode: 'My',
          llkkk: 'Contact Customer Service',
          aaad: 'Security Center',
          sd: 'Payment Address',
          sted: 'Presenting',
          tinis: 'Select Language',
          teteee: 'Logout'
        },
        it: {
          wode: 'Il mio',
          llkkk: 'Contattare il Servizio Clienti',
          aaad: 'Centro di sicurezza',
          sd: 'Indirizzo di pagamento',
          sted: 'Presentazioni',
          teteee: 'Disconnettersi',
          tinis: 'Selezionare la lingua'
        },
        de: {
          wode: 'Meine',
          llkkk: 'Kontakt zum Kundendienst',
          aaad: 'Sicherheitszentrum',
          sd: 'Zahlungsadresse',
          sted: 'Präsentationen',
          teteee: 'Abmelden',
          tinis: 'Sprache auswählen'
        }
      }
    }
  },
  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },
  methods: {
    logout() {
      window.localStorage.removeItem('usertoken')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.toubu {
  background-color: #fff;
  color: black;
}

.lie-2 {
  text-align: center;
  line-height: 55px;
  border-radius: 5px;
  color: #0a0a0a;
}

.content {
  padding-top: 50px;
}

.m-t-15 {
  margin-top: 15px;
}

.lie-2 {
  text-align: center;
  line-height: 55px;
  border-radius: 5px;
  color: #0a0a0a;
}

.liebiao {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 15px;
  height: 50px;
  box-shadow: 0 10px 10px #e3e0e0;
}

.dengchu {
  background-color: #ff4500;
  color: #fff !important;
}
</style>
