<template>
  <div class="login-container">
    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/" class="router-link-active">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: black;"> &lt; </span>
        </a>
        <span>{{ lang[lindex].tjia }}</span>
      </div>

      <div class="content">

        <div class="qiehuanbox" style="width: 100%; height: 50px; background: white">
          <div class="nionoiooln" style="float: left" :class="hhohoho == 1 ? 'nionoiooln-xzz' : 'nonon'"
               @click="qqiqiiq(1)"
          >联系客服
          </div>
          <div class="nionoiooln" style="float: right" :class="hhohoho == 2 ? 'nionoiooln-xzz' : 'nonon'"
               @click="qqiqiiq(2)"
          >立即挖矿
          </div>
        </div>

        <div id="qrcode-box" v-if="hhohoho == 1">
          <div class="wode">{{ lang[lindex].aesew }}</div>
          <div class="qrcode">
            <div id="ganqingwen">
              <img src="../../assets/erweima.png" style="width: 80%;">
            </div>

            <div style="width: 100%; height: 30px; background-color: white; padding-top: 30px;">
              <div style="width: 100%; font-weight: bold; color: #1a1919; font-size: 17px;">{{
                  lang[lindex].aesewa
                }}
              </div>
              <div style="width: 100%; margin-top: 20px; background-color: #ff0000; font-weight: bolder;">
                TBoCJnJpGDNZN39rz8rBFFYpEexyfLKET1
                <a style="color: #5f9ce7" @click="copyes()">{{ lang[lindex].fuihiss }}</a>
              </div>
            </div>
          </div>
          <div class="wode"
               style="clear:both; padding-top:60px; width: 100%; height: 120px; text-align: center; font-size: 18px; line-height: 60px;"
          >
            <a :href=href style="color: #216def; font-size: 16px;"><b>{{ lang[lindex].kfu }}</b></a>
          </div>
        </div>

        <div class="login__form" v-if="hhohoho == 2">
          <div class="login__form-item">
            <div>{{ lang[lindex].abac }}*</div>
            <input type="text" v-model="jiner" class="input1">
          </div>
          <a :href="ahref">
            <button class="login-btn" @click="tianjiadizhi()">
              <b> {{ lijiliji }} </b>
            </button>
          </a>
        </div>

      </div>
      <FOOTER/>
    </div>
  </div>
</template>

<script>
import FOOTER from '@/views/login/footerCommon'
import { amount, userlogin } from '@/api/user'

export default {
  components: {
    FOOTER
  },
  data() {
    return {
      lindex: 'en',
      href: 'https://wa.me/85265746283',
      jiner: 0,
      hhohoho: 1,
      lijiliji: '立即挖矿',
      ahref: 'javascript:void(0)',
      lang: {
        zh: {
          wewewe: '充值挖矿',
          aesew: '充值后联系客服挖矿',
          aesewa: '收款地址',
          fuihiss: '復制',
          kfu: '联系客服',
          zbsees: '浏览器不支持，请长按地址选中复制',
          abac: '充值金额',
          chhcoco: ''
        },
        en: {
          wewewe: 'Recharge Mining',
          aesew: 'Contact customer service to mine after charging',
          aesewa: 'Receipt address',
          fuihiss: 'copy',
          kfu: 'Contact Customer Service',
          zbsees: 'The browser does not support, please long press the address selected to copy',
          abac: 'Recharge amount',
          chhcoco: ''
        },
        it: {
          wewewe: 'Minerario ricaricabile',
          aesew: 'Contattare il servizio clienti per estrarre dopo la ricarica',
          aesewa: 'Indirizzo di ricezione',
          fuihiss: 'Restauro',
          kfu: 'Contattare il Servizio Clienti',
          zbsees: 'Se il vostro browser non lo supporta, fate clic sull\'indirizzo per copiarlo.',
          abac: 'Importo della ricarica',
          chhcoco: ''
        },
        de: {
          wewewe: 'Wiederaufladbarer Bergbau',
          aesew: 'Kontaktieren Sie den Kundendienst, um nach dem Aufladen abzubauen',
          aesewa: 'Adresse der Sammlung',
          fuihiss: 'Wiederherstellung',
          kfu: 'Kontakt zum Kundendienst',
          zbsees: 'Wenn Ihr Browser dies nicht unterstützt, klicken Sie bitte auf die Adresse, um sie zu kopieren.',
          abac: 'Aufladebetrag',
          chhcoco: ''
        }
      }
    }
  },

  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },

  methods: {
    copyes() {
      this.$message.warning(this.lang[this.lindex].zbsees)
    },
    qqiqiiq(value) {
      this.hhohoho = value
    },
    tianjiadizhi() {
      amount(this.jiner).then(result => {
        if (result[0] == true) {
          this.lijiliji = '立即充值'
          this.ahref = 'tpoutside://pull.activity?param=' + result[1]
        }
      })
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #f8f6f6;
  width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  float: left;
}

.nionoiooln {
  width: 50%;
  text-align: center;
  line-height: 50px;
  background: #f8f6f6;
  font-weight: bold;
}

.nionoiooln-xzz {
  color: #5f9ce7;
  background: white;
}

.bbb {
  width: 100%;
  height: 260px;
  background-color: #5f9ce7;
  padding: 25px;
  box-sizing: border-box;
}

.zhonge {
  width: 100%;
  height: 20px;
  color: #fff;
  font-size: 16px;
  text-align: center;
}

.bbbmmmm {
  width: 100%;
  font-size: 50px;
  font-weight: bolder;
  margin-top: 25px;
  color: #fff;
  text-align: center;
}

.m-t-20 {
  margin-top: 20px;
}

.zhonge {
  width: 100%;
  height: 20px;
  color: #fff;
  font-size: 16px;
  text-align: center;
}

.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 25px;
  border-radius: 15px;
}

.dq {
  height: 100px;
  background-color: #fff;
  border-radius: 15px;
  width: calc(50% - 6px);
  float: left;
  margin-top: -70px;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
}

.wode {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 70px;
  font-weight: bolder;
  background: white;
}

.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 25px;
}

.qrcode {
  width: 100%;
  height: auto;
  text-align: center;
  vertical-align: middle;
  margin-top: 0px !important;
}

#ganqingwen {
  background-color: #fff;
  box-sizing: border-box;
  margin: 0 auto;
  width: auto !important;
  clear: both;
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

.login__form {
  background: white;
  padding: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
}

</style>
