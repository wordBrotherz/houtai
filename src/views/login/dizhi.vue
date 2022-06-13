<template>
  <div class="login-container">
    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/my">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: black;"> &lt; </span>
        </a>
        <span> {{ lang[lindex].tjia }}</span>
      </div>

      <div class="content">
        <div class="login__form">
          <div class="login__form-item">
            <div>{{ lang[lindex].asfsf }}*</div>
            <input type="text" v-model="loginForm.type" :placeholder=lang[lindex].abasfas class="input1">
          </div>
          <div class="login__form-item">
            <div>{{ lang[lindex].bae }}*</div>
            <input type="text" v-model="loginForm.notes" :placeholder=lang[lindex].sesewe class="input1">
          </div>
          <div class="login__form-item">
            <div>{{ lang[lindex].addr }}*</div>
            <input type="text" v-model="loginForm.walleturl" :placeholder=lang[lindex].fze class="input1">
          </div>
          <button class="login-btn" @click="update()">
            <b>{{ lang[lindex].ffdfsfd }}</b>
          </button>
        </div>
      </div>
      <FOOTER/>
    </div>
  </div>
</template>

<script>
import FOOTER from '@/views/login/footerCommon'
import { Payment } from '@/api/user'

export default {
  components: {
    FOOTER
  },
  data() {
    return {
      loginForm: {
        type: '',
        walleturl: '',
        notes: ''
      },
      lindex: 'en',
      lang: {
        zh: {
          tjia: '添加地址',
          asfsf: '錢包類型',
          abasfas: '請選擇錢包類型',
          bae: '備注',
          sesewe: '請輸入備注',
          addr: '地址',
          fze: '復制並粘貼您的錢包地址',
          ffdfsfd: '提交地址',
          cengong: '操作成功',
        },
        en: {
          tjia: 'Add Address',
          asfsf: 'Wallet type',
          abasfas: 'Please select the wallet type',
          bae: 'Remark',
          sesewe: 'Please enter a comment',
          addr: 'Address',
          fze: 'Copy and paste your wallet address',
          ffdfsfd: 'Submit',
          cengong: 'Successful operation',
        },
        it: {
          tjia: 'Aggiungi indirizzo',
          asfsf: 'Tipo di portafoglio',
          abasfas: 'Selezionare un tipo di portafoglio',
          bae: 'Osservazione',
          sesewe: 'Inserisci un commento',
          addr: 'Indirizzo',
          fze: 'Copiare e incollare l\'indirizzo del portafoglio',
          ffdfsfd: 'Invia',
          cengong: 'Operazione di successo',
        },
        de: {
          tjia: 'Adresse hinzufügen',
          asfsf: 'Typ der Brieftasche',
          abasfas: 'Bitte wählen Sie einen Briefträgertyp',
          bae: 'Bemerkung',
          sesewe: 'Bitte geben Sie einen Kommentar ein',
          addr: 'Adresse',
          fze: 'Kopieren Sie Ihre Brieftaschenadresse und fügen Sie sie ein.',
          ffdfsfd: 'Einreichen',
          cengong: 'Erfolgreiche Operation',
        }
      }
    }
  },
  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },
  methods: {
    update() {
      Payment(this.loginForm).then(result => {
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

.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
