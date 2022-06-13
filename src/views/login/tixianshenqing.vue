<template>
  <div class="login-container">
    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/my">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: black;"> &lt; </span>
        </a>
        <span>{{ lang[lindex].setwe }}</span>
      </div>

      <div class="content">
        <div class="login__form">
          <div class="login__form-item">
            <div>{{ lang[lindex].ateewe }}*</div>
            <input type="text" v-model="shuju.balance" disabled class="input1">
          </div>
          <div class="login__form-item">
            <div>{{ lang[lindex].ateeteewe }}*</div>
            <input type="text" v-model="data.withdraw" :placeholder=lang[lindex].gete class="input1">
          </div>

          <div class="login__form-item" v-if="shuju.fake_sta == 1">
            <div>{{ lang[lindex].zhongjiang }}*</div>
            <input type="text" v-model="shuju.fake_amount"  disabled  class="input1">
          </div>

          <button class="login-btn" @click="update()" v-if="shuju.addHas == 1">
            <b> {{ lang[lindex].ppp }}</b>
          </button>

          <button class="login-btn" @click="tianjiadizhi()" v-else>
            <b>{{ lang[lindex].ewewew }}</b>
          </button>
        </div>
      </div>
      <FOOTER/>
    </div>
  </div>
</template>

<script>
import FOOTER from '@/views/login/footerCommon'
import { withdraw, SubmitWithdraw } from '@/api/user'

export default {
  components: {
    FOOTER
  },
  data() {
    return {
      shuju: {
        balance: 0,
        addHas: 0,
        fake_amount: 0,
        fake_sta: 0,
        address: ''
      },
      data: {
        withdraw: 0,
        address: ''
      },
      lindex: 'en',
      lang: {
        zh: {
          setwe: '申請提現',
          ateewe: '可提現金額',
          zhongjiang: '中奖金额',
          ateeteewe: '提現金額',
          gete: '輸入要提現的金額',
          ppp: '申請提現',
          ewewew: '添加錢包地址',
          asdfasfasf: '輸入金額操作可提現金額',
          uinio: '請輸入提現金額',
          ususs: '操作成功，等待審核'
        },
        en: {
          setwe: 'Request a cash withdrawal',
          ateewe: 'Withdrawable amount',
          zhongjiang: 'Winning amount',
          ateeteewe: 'Withdrawal Amount',
          gete: 'Enter the amount to be withdrawn',
          ppp: 'Request a cash withdrawal',
          ewewew: 'Add a wallet address',
          asdfasfasf: 'Enter the amount to operate the withdrawal amount',
          uinio: 'Please enter the cash withdrawal amount',
          ususs: 'Operation successful, waiting for audit'
        },
        it: {
          setwe: 'Richiedere un prelievo di contanti',
          ateewe: 'Importo prelevabile',
          ateeteewe: 'Importo del prelievo',
          zhongjiang: 'Importo vincente',
          gete: 'Inserire l\'importo da prelevare',
          ppp: 'Richiedere un prelievo di contanti',
          ewewew: 'Aggiungere un indirizzo di portafoglio',
          asdfasfasf: 'Inserire l\'importo da prelevare',
          uinio: 'Inserire l\'importo del prelievo',
          ususs: 'Operazione riuscita, in attesa della verifica'
        },
        de: {
          setwe: 'Richiedere un prelievo di contanti',
          ateewe: 'Importo prelevabile',
          ateeteewe: 'Importo del prelievo',
          zhongjiang: 'Gewonnener Betrag',
          gete: 'Inserire l\'importo da prelevare',
          ppp: 'Richiedere un prelievo di contanti',
          ewewew: 'Aggiungere un indirizzo di portafoglio',
          asdfasfasf: 'Inserire l\'importo da prelevare',
          uinio: 'Inserire l\'importo del prelievo',
          ususs: 'Operazione riuscita, in attesa della verifica'
        }
      }
    }
  },
  created() {
    this.twithdraw()
  },
  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },
  methods: {
    update() {
      if (this.qian < this.data.withdraw) {
        return this.$message.warning(this.lang[this.lindex].asdfasfasf)
      } else if (0 == this.data.withdraw) {
        return this.$message.warning(this.lang[this.lindex].uinio)
      }

      SubmitWithdraw(this.data).then(result => {
        if (result[0] == true) {
          this.$message.success(this.lang[this.lindex].ususs)
        } else {
          this.$message.error(result[0])
        }
      })
    },
    twithdraw() {
      withdraw().then(result => {
        if (result[0] == true) {
          this.shuju = result[1]
          this.shuju.address = result[1].address
          this.shuju.fake_sta = result[1].fake_sta
          this.shuju.fake_amount = result[1].fake_amount
        }
      })
    },
    tianjiadizhi() {
      this.$router.push('/address')
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
