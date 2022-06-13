<template>
  <div class="login-container">
    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/assets" class="router-link-active">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: black;"> &lt; </span>
        </a>
        <span>  {{ lang[lindex].bbbbbb }} </span>
      </div>

      <div class="bbbb">
        <div class="nihaonihao">
          <span class="abasd" :class="xz == 1 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(1)">{{ lang[lindex].chongzi }}</span>
        </div>

        <div class="nihaonihao">
          <span class="abasd" :class="xz == 2 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(2)">{{ lang[lindex].asewe }}</span>
        </div>

        <div class="nihaonihao">
          <span class="abasd" :class="xz == 3 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(3)">{{ lang[lindex].sewewe }}</span>
        </div>

        <div class="nihaonihao">
          <span class="abasd" :class="xz == 4 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(4)">{{ lang[lindex].yonins }}</span>
        </div>
      </div>

      <div class="content" style="margin-top: 50px;">
        <div v-for="items in list">
          <!--          <div class="yuefen m-t-40" style="margin-bottom: 10px"> - 2022-6 -</div>-->
          <div class="liebiao m-t-15">
            <div class="lie-2">
              <div class="lie-2-clon">
                <div class="ninininin">   {{ lang[lindex].chongzi }} <b class="zhyue">
                  {{ items.change_amount }} </b>
                </div>
              </div>
              <div class="lie-2-clon">
                <div class="ninininin">   {{ lang[lindex].bal }} <b class="zhyue hhuise">
                  {{ items.current_amount }} </b>
                </div>
              </div>
              <span class="ssssttttt yanse_1"> {{ lang[lindex].wac }} </span>
            </div>
          </div>

        </div>
        <div class="yuefen">  {{ lang[lindex].end }} </div>
      </div>

      <FOOTER/>
    </div>
  </div>
</template>

<script>
import { billrecord } from '@/api/user'
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
      lindex: 'en',
      lang: {
        zh:{
          end: '我是有底線的人',
          wac: '交易完成',
          bal: '餘額',
          chongzi: '充值',
          yonins: '傭金',
          sewewe: '利息',
          asewe: '提現',
          bbbbbb: '收支明細',
        },
        en:{
          end: 'end',
          wac: 'Transaction Completion',
          bal: 'Balance',
          chongzi: 'Recharge',
          yonins: 'Commissions',
          sewewe: 'Interest',
          asewe: 'Presenting',
          bbbbbb: 'Income and Expenditure',
        },
        it:{
          end: 'Fine',
          wac: 'Completamento della transazione',
          bal: 'Equilibrio',
          chongzi: 'Ricarica',
          yonins: 'Commissioni',
          sewewe: 'Interesse',
          asewe: 'Presentazioni',
          bbbbbb: 'Ripartizione delle entrate e delle uscite',
        },
        de:{
          end: 'Ende',
          wac: 'Vollzug der Transaktion',
          bal: 'Bilanz',
          chongzi: 'Aufladen',
          yonins: 'Provisionen',
          sewewe: 'Zinsen',
          asewe: 'Präsentationen',
          bbbbbb: 'Aufschlüsselung der Einnahmen und Ausgaben',
        },
      }
    }
  },
  created() {
    this.getassets(1)
  },

  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },

  methods: {
    getassets(value) {
      billrecord(value, 200, 1).then(result => {
        this.list = result[1] || []
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
.wrap {
  background-color: #f8f6f6;
  width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 60px;
  float: left;
}

.toubu {
  color: black;
  background-color: #fff;
}

.bbbb {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
}

.nihaonihao {
  width: 25%;
  float: left;
  text-align: center;
  line-height: 50px;
  font-weight: bolder;
}

.xuanzhong {
  border-bottom: 3px solid #3a8ee6;
  color: #3a8ee6;
}

.abasd {
  width: auto;
  margin: 0 auto;
  padding-bottom: 6px;
}
.yuefen {
  color: #928b8b;
  width: 100%;
  text-align: center;
  font-size: 14px;
}

.liebiao {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 15px;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #e3e0e0;
}

.ninininin {
  color: #6a6767;
}

.zhyue {
  font-weight: bolder;
  margin-top: 10px;
  color: #000;
  font-size: 22px;
  line-height: 50px;
}

.ninininin {
  color: #6a6767;
}

.hhuise {
  color: #3a8ee6 !important;
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
