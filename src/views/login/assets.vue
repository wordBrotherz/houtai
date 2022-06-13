<template>
  <div class="login-container">
    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/" class="router-link-active">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: white;"> &lt; </span>
        </a>
        <span>  {{ lang[lindex].afdasfasf }} </span>
      </div>

      <div class="bbb">
        <div class="zhonge"><b>{{ lang[lindex].eewe }}（TRX）</b></div>
        <div class="bbbmmmm">{{ zichan.total_balance }}</div>
        <div class="zhonge m-t-20"><b> {{ lang[lindex].zr }} + {{ zichan.yest_income }} </b>
          <b style="margin-left: 40px"> {{ lang[lindex].lji }} + {{ zichan.invite_revenue }} </b>
        </div>
        <div class="mingxi">
          <div style="float: left; margin-top: 5px; margin-left: 10px;">
            <svg t="1654068384702" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1181"
                 width="30" height="30" class="icon"
            >
              <path
                d="M512 550.52a68.61 68.61 0 0 1-27.7-5.81l-333.48-147c-23.34-10.29-38.05-32-38.39-56.57s13.73-46.54 36.7-57.43l333.49-158a69.33 69.33 0 0 1 58.79 0l333.11 158c23 10.89 37 32.89 36.68 57.42s-15 46.25-38.37 56.54l-333.1 147a69.08 69.08 0 0 1-27.73 5.85zM179.09 340.28l331 146a5.11 5.11 0 0 0 3.88 0l330.59-145.9L514 183.5a5 5 0 0 0-4 0zM847.87 342zM512.16 887.53a63.11 63.11 0 0 1-27.3-6.26L162.29 741.75a31.95 31.95 0 1 1 25.37-58.64l323.72 140 308.69-139.8a32 32 0 0 1 26.46 58.18l-308 140a60.32 60.32 0 0 1-26.35 6z m0 0"
                fill="#ffffff" p-id="1182"
              />
              <path
                d="M833.3 506.45L511.66 646.22 190.28 506.76v65.78a30.65 30.65 0 0 0 18.56 28.15l269.58 115.5a76.13 76.13 0 0 0 66.48 0l269.85-115.78a30.62 30.62 0 0 0 18.55-28.15z m0 0"
                fill="#ffffff" p-id="1183"
              />
            </svg>
          </div>
          <router-link to="/assets/wt">
            <span style="color: white; line-height: 43px; float: left; margin-left: 7px;">
              <span>  {{ lang[lindex].eeeee }} </span><b> &gt; </b></span>
          </router-link>
        </div>
      </div>
      <div class="content" style="margin-top: 40px;">
        <div class="dq liebiao">
          <div class="sansna">
            <div class="sansansa" style="text-align: left;">
              <div style="width: 100%; color: rgb(106, 103, 103);"><b> {{ lang[lindex].bsdsds }} </b>
              </div>
              <div class="valuess"> {{ zichan.mining_revenue }}</div>
            </div>
            <div class="sansansa">
              <div style="color: rgb(106, 103, 103);"><b> {{ lang[lindex].bsdtrsds }} </b></div>
              <div class="valuess">{{ zichan.invite_revenue }}</div>
            </div>
            <div class="sansansa" style="text-align: right;">
              <div style="color: rgb(106, 103, 103);"><b> {{ lang[lindex].iiiii }} </b></div>
              <div class="valuess">{{ zichan.finance_revenue }}</div>
            </div>
          </div>
        </div>

        <div class="bbbb">
          <div class="nihaonihao">
            <span class="abasd" :class="xz == 1 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(1)"> {{
                lang[lindex].bsddas
              }}   </span>
          </div>
          <div class="nihaonihao">
            <span class="abasd" :class="xz == 2 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(2)">  {{
                lang[lindex].iuytre
              }}  </span>
          </div>
        </div>

        <div class="liebiao m-t-15" v-for="items in list">
          <div class="lie-2">
            <div class="lie-2-clon">
              <div class="ninininin"> {{ lang[lindex].bsddas }} <b class="zhyue">
                {{ items.change_amount }} </b></div>
            </div>
            <div class="lie-2-clon">
              <div class="ninininin"> {{ lang[lindex].uuiui }} <b class="zhyue hhuise">
                {{ items.current_amount }} </b>
              </div>
            </div>
            <span class="ssssttttt yanse_1">{{ items.bill_status | nonno }}</span></div>
        </div>
        <div class="yuefen" style="margin-bottom: 70px;"> {{ lang[lindex].edc }}</div>
      </div>
    </div>

    <FOOTER/>
  </div>
</template>

<script>
import { accessRecords, totalassets } from '@/api/user'
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
      xz: 1,
      list: [],
      zichan: {
        yest_income: 0,
        total_balance: 0,
        mining_revenue: 0,
        finance_revenue: 0,
        invite_revenue: 0,
        grandTotal: 0
      },
      lindex: 'en',
      lang: {
        zh: {
          afdasfasf: '賬戶資產',
          eewe: '我的資產總額',
          zr: '昨日收益',
          lji: '累計收益',
          eeeee: '收支明細',
          bsdsds: '挖礦收益',
          bsdtrsds: '傭金收益',
          iiiii: '理财收益',
          bsddas: '收入',
          iuytre: '支出',
          uuiui: '餘額',
          edc: '我是有底線的人',
          ooutyty: '交易完成',
          ytrass: '交易失敗',
          bsdsdsd: '待審核'
        },
        en: {
          afdasfasf: 'Account Assets',
          eewe: 'My Total Assets',
          zr: 'Yesterday\'s earnings',
          lji: 'Accumulated earnings',
          eeeee: 'detail',
          bsdsds: 'Mining Revenue',
          bsdtrsds: 'Commission earnings',
          iiiii: 'Wealth management income',
          bsddas: 'Revenue',
          iuytre: 'Expenses',
          uuiui: 'Balance',
          edc: 'end',
          ooutyty: 'Transaction Completion',
          ytrass: 'Trading Failure',
          bsdsdsd: 'To be audited'
        },
        it: {
          afdasfasf: 'Conto Attività',
          eewe: 'Il mio patrimonio totale',
          zr: 'I guadagni di ieri',
          lji: 'Prestazioni maturate',
          eeeee: 'Dettagli',
          bsdsds: 'Ricavi da attività estrattiva',
          bsdtrsds: 'Guadagni su commissione',
          iiiii: 'Rendimenti finanziari',
          bsddas: 'Reddito',
          iuytre: 'Spese',
          uuiui: 'Equilibrio',
          edc: 'Fine',
          ooutyty: 'Completamento della transazione',
          ytrass: 'Fallimenti nel trading',
          bsdsdsd: 'Da verificare'
        },
        de: {
          afdasfasf: 'Konto Vermögen',
          eewe: 'Mein gesamtes Vermögen',
          zr: 'Die gestrigen Ergebnisse',
          lji: 'Aufgelaufene Leistungen',
          eeeee: 'Aufschlüsselung',
          bsdsds: 'Einnahmen aus dem Bergbau',
          bsdtrsds: 'Kommissionserträge',
          iiiii: 'Finanzielle Erträge',
          bsddas: 'Einkommen',
          iuytre: 'Ausgaben',
          uuiui: 'Bilanz',
          edc: 'Ende',
          ooutyty: 'Vollzug der Transaktion',
          ytrass: 'Misserfolge im Handel',
          bsdsdsd: 'Geprüft werden'
        }
      }
    }
  },

  filters: {
    nonno(value) {
      if (value == 1) {
        return this.lang[this.lindex].ooutyty
      } else if (value == 2) {
        return this.lang[this.lindex].ytrass
      }

      return this.lang[this.lindex].bsdsdsd
    }
  },

  created() {
    this.getassets(1)
    this.totalassets()
  },

  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },

  methods: {
    getassets(value) {
      accessRecords(value, 200, 1).then(result => {
        if (result[0] == true) {
          this.list = result[1]
        }
      })
    },
    totalassets() {
      totalassets().then(result => {
        if (result[0] == true) {
          this.zichan = result[1]
        }
      })
    },
    xuanzhong(value) {
      this.xz = value
      this.getassets(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.toubu {
  color: #fff;
  background-color: #5f9ce7;
}

.bbb {
  width: 100%;
  height: 320px;
  background-color: #5f9ce7;
  padding: 25px;
  box-sizing: border-box;
}

.zhonge {
  width: 100%;
  height: 20px;
  color: #fff;
  font-size: 16px;
  margin-top: 40px;
}

.liebiao {
  width: 100%;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 15px;
  height: 80px;
  border-radius: 5px;
  -webkit-box-shadow: 0 10px 10px #e3e0e0;
  box-shadow: 0 10px 10px #e3e0e0;
  margin-top: 30px;
}

.dq {
  height: 100px;
  background-color: #fff;
  margin-top: -100px;
}

.sansna {
  width: 100%;
  margin-top: 5px;
  color: #0a0a0a;
  font-size: 13px;
}

.sansansa {
  width: 33.3%;
  height: 50px;
  float: left;
  text-align: center;
}

.liebiao {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 15px;
  height: 80px;
  border-radius: 15px;
  box-shadow: 0 10px 10px #e3e0e0;
}

.bbbmmmm {
  width: 100%;
  font-size: 50px;
  font-weight: bolder;
  margin-top: 25px;
  color: #fff;
}

.valuess {
  font-size: 20px;
  margin-top: 10px;
}

.mingxi {
  width: 140px;
  height: 40px;
  background-color: #7aaef9;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: absolute;
  right: 0;
  top: 125px;
}

.bbbb {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 30px;
}

.nihaonihao {
  width: 50%;
  float: left;
  text-align: center;
  line-height: 50px;
  font-weight: bolder;
}

.abasd {
  width: auto;
  margin: 0 auto;
  padding-bottom: 6px;
}

.xuanzhong {
  border-bottom: 3px solid #3a8ee6;
  color: #3a8ee6;
}

.yuefen {
  color: #928b8b;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

.ninininin {
  color: #6a6767;
}

.hhuise {
  color: #3a8ee6 !important;
}

.zhyue {
  font-weight: bolder;
  margin-top: 10px;
  color: #000;
  font-size: 22px;
  line-height: 50px;
}

.lie-2-clon {
  width: 50%;
  float: left;
  text-align: left;
}

.yanse_1 {
  color: green;
}

.ssssttttt {
  float: right;
  margin-top: -15px;
  font-size: 13px;
}

</style>
