<template>
  <div id="app" class="login-container">
    <div class="toubu">
      <span>TRON Chain-TRX</span>
    </div>

    <div class="content">
      <p class="hello">{{ lang[lindex].hello }}, {{ uname }}</p>

      <div class="oxb"><p class="asset-txt"> {{ lang[lindex].wdzc }} </p>
        <div class="zzzz">{{ lang[lindex].TRX }}</div>
        <p class="asset-txt1"><b>{{ lang[lindex].wdzc }}</b></p>
        <p class="asset-txt2"><b>{{ lang[lindex].zsyy }}</b></p>
        <p class="money-b">{{ zichan.balance || 0 }}</p>
        <p class="money-s"> {{ zichan.total_revenue || 0 }} </p>

        <div style="margin-top: -20px; width: 100%; float: left;">
          <p class="asset-txt1" style="clear: both;"><b> {{ lang[lindex].wkzjjin }} </b></p>
          <p class="asset-txt2"><b> {{ lang[lindex].shouyi }} </b></p>
          <p class="money-b">{{ zichan.deliver_balance || 0 }}</p>
          <p class="money-s">{{ zichan.mining_revenue || 0 }}</p>
        </div>
      </div>

      <div class="item-2">
        <div class="item1" @click="licaishuoming()">
          <p style="color: rgb(235, 131, 62); font-weight: bold;"> {{ lang[lindex].icai }} </p>
          <p style="font-size: 13px; color: rgb(235, 131, 62);"> {{ lang[lindex].icai }} </p>
          <img src="../../assets/cash-icon.4c42a7f8.png">
        </div>

        <router-link to="/chongzhi">
          <div class="item2">
            <p style="color: rgb(235, 131, 62); font-weight: bold;"> {{ lang[lindex].caseewe }} </p>
            <p style="font-size: 13px; color: rgb(235, 131, 62);">{{ lang[lindex].caseewe }}</p>
            <img src="../../assets/gift-icon.2c620708.png">
          </div>
        </router-link>
      </div>

      <div class="box-bbb"><p class="kuangc"> {{ lang[lindex].dccccc }} </p>
        <div class="titlebb"> {{ lang[lindex].wwwww }}</div>

        <div class="info-3">
          <div class="info1 infop3">
            <p class="bitoi1 bbbssa"><b> {{ lang[lindex].ssese }} </b></p>
            <p class="vlue">{{ kuangji.rate }} H/S</p>
          </div>

          <div class="info1 infop3">
            <p class="bitoi2 bbbssa"><b> {{ lang[lindex].rrrrr }} </b></p>
            <p class="vlue" style="text-align: center;"> {{ lang[lindex].ytyt }} {{ kuangji.rate | nonno }}</p>
          </div>

          <div class="info1 infop3">
            <p class="bitoi3 bbbssa"><b> {{ lang[lindex].ggggvvv }} </b></p>
            <p class="vlue" style="text-align: right;">{{ kuangji.power }} W</p>
          </div>
        </div>

        <div class="nihao">
          <ul class="tongjiss">
            <li>
              <div class="pointer"></div>
              {{ kuangjista | mmmmmmm(that) }}
            </li>
            <li>
              <div>
                <div class="pointer"></div>
                {{ lang[lindex].GSESE }} <span class="originyes">0.000000</span> TRX
              </div>
            </li>
            <li>
              <a href="#/compute/list" class="">
                <div class="sjkj"> {{ lang[lindex].SEHNEJGI }}</div>
              </a>
            </li>
          </ul>
          <div id="bpop" class="bg">
            <div>
              <div class="one">
                <div>
                  {{ kuangjista | stttt(that) }}
                  <p></p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FOOTER/>
  </div>
</template>

<script>
import FOOTER from './footerCommon.vue'
import { getassets, userminer, AddMiningIncome } from '@/api/user'

export default {
  components: {
    FOOTER
  },
  filters: {
    nonno(value) {
      let arrr = value.toString().split(',')
      let st = arrr[0] || 0
      let ttt = arrr[1] || st
      return st + ' % ~ ' + ttt + ' %'
    },
    stttt(value, _this) {
      let bbbbs = _this.lang[_this.lindex]

      if (value == 1 || value == 3) {
        return bbbbs.wdwe
      } else if (value == 2) {
        return bbbbs.wewewekiw
      }
    },
    mmmmmmm(value, _this) {
      let bbbbs = _this.lang[_this.lindex]

      if (value == 1) {
        return bbbbs.wdwe
      } else if (value == 2) {
        return bbbbs.wewewekiw
      } else if (value == 3) {
        return bbbbs.sdisnins
      }
    }
  },
  data() {
    return {
      loginForm: {
        adminuser: '',
        password: ''
      },
      that: this,
      uname: '',
      kuangji: {
        rate: 0,
        power: 0,
        response_rate: 0
      },
      lindex: 'en',
      lang: {
        zh: {
          hello: '你好',
          wdzc: '我的資產',
          TRX: 'TRX 資產',
          zsyy: '總收益',
          wkzjjin: '挖礦資金',
          shouyi: '挖礦收益',
          icai: '理財產品',
          shourusdd: '睡眠收入',
          caseewe: '充值挖矿',
          dccccc: '礦場',
          wwwww: '挖礦',
          ssese: '我的算力',
          rrrrr: '日回報率',
          ytyt: '約',
          ggggvvv: '礦機功率',
          GSESE: '共挖得',
          SEHNEJGI: '升級礦機',
          QED: '敬請期待',
          sdisnins: '24小时后产生收益，未到收益时间',
          wewewekiw: '未开始....',
          wdwe: '挖矿中....'
        },
        en: {
          hello: 'Hi',
          wdzc: 'My Assets',
          TRX: 'TRX Assets',
          zsyy: 'Total Revenue',
          wkzjjin: 'Mining Funds',
          shouyi: 'Mining Revenue',
          icai: 'Products',
          shourusdd: 'Sleep income',
          caseewe: 'Recharge',
          dccccc: 'Mine site',
          wwwww: 'Mining',
          ssese: 'My Calculation Power',
          rrrrr: 'Daily Return Rate',
          ytyt: 'About',
          ggggvvv: 'Mine power',
          GSESE: 'Total digging',
          SEHNEJGI: 'Upgrade',
          QED: 'Please look forward to',
          sdisnins: 'Generate earnings after 24 hours, before earnings time',
          wewewekiw: 'Not started....',
          wdwe: 'Mining in progress....'
        },
        it: {
          hello: 'Ciao',
          wdzc: 'I miei beni',
          TRX: 'TRX Attività',
          zsyy: 'Ricavi totali',
          wkzjjin: 'Fondi minerari',
          shouyi: 'Ricavi da attività estrattiva',
          icai: 'Prodotti di gestione patrimoniale',
          shourusdd: 'Reddito da sonno',
          caseewe: 'Minerario ricaricabile',
          dccccc: 'Sito della miniera',
          wwwww: 'Miniere',
          ssese: 'Il mio potere di contare',
          rrrrr: 'Tasso di rendimento giornaliero',
          ytyt: 'Circa.',
          ggggvvv: 'Potenza della miniera',
          GSESE: 'Un totale di',
          SEHNEJGI: 'Upgrade',
          QED: 'Attendete con ansia',
          sdisnins: 'Generare guadagni dopo 24 ore, prima del tempo di guadagno',
          wewewekiw: 'Non iniziato....',
          wdwe: 'Estrazione in corso....'
        },
        de: {
          hello: 'Hallo',
          wdzc: 'Mein Vermögen',
          TRX: 'TRX-Vermögenswerte',
          zsyy: 'Einnahmen insgesamt',
          wkzjjin: 'Bergbaufonds',
          shouyi: 'Einnahmen aus dem Bergbau',
          icai: 'Produkte',
          shourusdd: 'Schlafeinkommen',
          caseewe: 'Aufladen',
          dccccc: 'Minenstandort',
          wwwww: 'Bergbau',
          ssese: 'Meine Zählkraft',
          rrrrr: 'Tägliche Rendite',
          ytyt: 'Ungefähr.',
          ggggvvv: 'Minenleistung',
          GSESE: 'Insgesamt sind es',
          SEHNEJGI: 'Upgrade',
          QED: 'Bitte freuen Sie sich auf',
          sdisnins: 'Erträge nach 24 Stunden generieren, vor der Ertragszeit',
          wewewekiw: 'Nicht gestartet....',
          wdwe: 'Laufender Bergbau....'
        }
      },
      kuangjista: 3,
      zichan: {
        balance: 0,
        deliver_balance: 0,
        total_revenue: 0,
        mining_revenue: 0
      }
    }
  },

  created() {
    this.uname = window.localStorage.getItem('UserName')
    this.getassets()
    this.userminer()
    this.AddMiningIncome()
  },

  mounted() {
    this.lindex = window.localStorage.getItem('lang')

    console.log(
      this.lang[this.lindex]
    )

  },

  methods: {
    getassets() {
      getassets().then(result => {
        if (result[0] == true) {
          this.zichan = result[1]
        }
      })
    },
    userminer() {
      userminer().then(result => {
        if (result[0] == true) {
          this.kuangji = result[1]
        }
      })
    },
    AddMiningIncome() {
      AddMiningIncome().then(result => {
        if (result[0] == true) {
          this.kuangjista = result[1].status
        }
      })
    },
    licaishuoming() {
      this.$message.warning(this.lang[this.lindex].QED)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: #5f9ce7 !important;
}

.toubu {
  color: white;
  background-color: #5f9ce7;
}

#home-app {
  width: 100%;
  box-sizing: border-box;
  float: left;
  margin-top: 40px;
}

.hello {
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  margin-left: 5px;
  margin-top: 60px;
}

.item-2 {
  width: 100%;
  margin-top: 20px;
  float: left;
  box-sizing: border-box;
}

.item1 {
  border-radius: 10px;
  width: calc(50% - 6px);
  float: left;
  height: 100px;
  background-color: #fdf2ea;
  box-sizing: border-box;
  margin-right: 10px;
  padding-left: 15px;
}

.box-bbb {
  width: 100%;
  background-color: #e1ecfb;
  float: left;
  margin-top: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 60px;
}

.kuangc {
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  margin-top: -5px;
  color: #6a6767;
}

.titlebb {
  border-left: 5px solid #5386e5;
  color: #5386e5;
  text-indent: 6px;
  font-weight: 700;
  font-size: 18px;
  height: 17px;
  line-height: 20px;
}

.infop3 .bbbssa {
  color: #6a6767;
}

.infop3 .vlue {
  font-size: 16px;
  font-weight: 700;
  color: #6a6767;
}

.infop3 .bitoi2 {
  width: 100%;
  text-align: center;
}

.infop3 .bbbssa {
  color: #6a6767;
}

.infop3 {
  width: 33%;
  float: left;
}

.nihao {
  clear: both;
  height: 200px;
  box-sizing: border-box;
  margin-top: 10px;
  float: left;
  width: 100%;
  border-radius: 20px;
}

.tongjiss {
  color: #6a6767;
  font-weight: 700;
  float: left;
}

ul {
  list-style: none;
  padding: 0;
}

.originyes {
  color: orange;
}

.bg {
  position: relative;
}

.pointer {
  float: left;
  width: 13px;
  height: 13px;
  background: #b5cdf5;
  border-radius: 20px;
  margin-top: 8px;
  margin-right: 8px;
}

.bg .content div {
  background: #b5cdf5;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 10px #5f9ce7;
}

.bg .content span {
  position: absolute;
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  -webkit-animation: myfirst2 5s infinite;
  animation: myfirst2 5s infinite;
  box-shadow: 0 0 10px #739ac9;
  -webkit-animation-delay: .5s;
  animation-delay: .5s;
  top: -7.5px;
  left: -7.5px;
}

.infop3 {
  width: 33%;
  float: left;
}

.infop3 .bitoi3 {
  text-align: right;
}

.sjkj {
  width: 110px;
  height: 35px;
  border: 1px solid #5f9ce7;
  border-bottom: 2px solid #5f9ce7;
  color: #5f9ce7;
  text-align: center;
  line-height: 35px;
  margin-top: 20px;
  margin-left: 10px;
  float: left;
}

.bg .content span {
  position: absolute;
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  -webkit-animation: myfirst2 5s infinite;
  animation: myfirst2 5s infinite;
  box-shadow: 0 0 10px #739ac9;
  -webkit-animation-delay: .5s;
  animation-delay: .5s;
  top: -7.5px;
  left: -7.5px;
}

.tongjiss li {
  margin-bottom: 20px;
}

.tongjiss {
  color: #6a6767;
  font-weight: 700;
  float: left;
}

li {
  clear: both;
  display: list-item;
  text-align: -webkit-match-parent;
}

.item2 {
  border-radius: 10px;
  width: calc(50% - 6px);
  float: right;
  height: 100px;
  background-color: #dee8fd;
  box-sizing: border-box;
  padding-left: 15px;
}

.oxb {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  background-color: #7aaef9;
  margin-top: 5px;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
}

.asset-txt {
  color: #fff;
  font-weight: bolder;
  font-size: 26px;
}

.item-2 img {
  width: 55px;
  float: right;
  margin-top: -55px;
  margin-right: 20px;
}

.zzzz {
  float: right;
  background-color: #7fff00;
  padding: 5px;
  margin-top: -55px;
  border-radius: 2px;
  color: #6a6767;
  font-weight: bolder;
}

.wrap {
  width: 100%;
  height: 100%;
}

.asset-txt1 {
  color: #fff;
  float: left;
}

.asset-txt2 {
  color: #fff;
  float: right;
}

.money-b {
  margin-top: -5px;
  clear: both;
  color: #fff;
  font-size: 24px;
  float: left;
  font-weight: 700;
}

.money-s {
  margin-top: -5px;
  color: #fff;
  font-size: 20px;
  float: right;
}

#bpop {
  float: right;
  margin-top: 60px;
  font-weight: bolder;
  margin-right: 30px;
  color: red;
}
</style>
