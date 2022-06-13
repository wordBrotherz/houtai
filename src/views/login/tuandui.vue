<template>
  <div class="login-container">
    <div data-v-26013f28="" class="wrap w-100-per">
      <div class="toubu">
        <a href="#/" class="router-link-active">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: white;"> &lt; </span>
        </a>
        <span>  {{ lang[lindex].bsjijs }} </span>
      </div>

      <div class="bbb">
        <div class="zhonge"><b> {{ lang[lindex].erwwe }} （TRX）</b></div>
        <div class="bbbmmmm"> {{ zichan.recharge }}</div>
        <div class="zhonge m-t-20"><b>{{ lang[lindex].iangli }} +{{ zichan.yesterday_income || 0 }} </b></div>
      </div>
      <div class="content">
        <div class="dq liebiao">
          <div style="color: rgb(106, 103, 103);"> {{ lang[lindex].res }}</div>
          <a href="#/teams/members" class="">
            <div style="font-size: 35px; margin-top: 10px;">
              <b>{{ zichan.team_total }}</b>
            </div>
          </a>
        </div>

        <div class="dq liebiao" style="float: right;">
          <div style="color: rgb(106, 103, 103);"> {{ lang[lindex].seewewe }}</div>
          <a href="#/teams/yes" class="">
            <div style="font-size: 35px; margin-top: 10px;">
              <b>+ {{ zichan.yesterdayNumber }} </b>
            </div>
          </a>
        </div>

        <div class="wode"> {{ lang[lindex].dew }}</div>
        <div class="qrcode">
          <div id="ganqingwen">
            <canvas width="256" height="256" style="display: none;"></canvas>
            <img
              src="data:image/png;base64,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"
            >
          </div>
        </div>
        <div class="wode">{{ lang[lindex].yiyi }}：4561321 <a style="color: #216def" @click="fuzhi()"
        >{{ lang[lindex].fuihiss }}</a></div>
      </div>
      <FOOTER/>
    </div>
  </div>
</template>

<script>
import { indexTeam } from '@/api/user'
import FOOTER from '@/views/login/footerCommon'

export default {
  components: {
    FOOTER
  },
  data() {
    return {
      zichan: {
        recharge: 0,
        yesterday_income: 0,
        in_code: 0,
        team_total: 0,
        yesterdayNumber: 0
      },
      loginForm: {
        adminuser: '',
        password: ''
      },
      lindex: 'en',
      lang: {
        zh: {
          fuhzi: '複製成功',
          yiyi: '邀請碼',
          fuihiss: '復制',
          dew: '我的邀請二維碼',
          seewewe: '昨日新增',
          res: '團隊人數',
          iangli: '昨日獎勵（TRX）',
          erwwe: '傭金總額',
          bsjijs: '我的團隊'
        },
        en: {
          fuhzi: 'Copied successfully',
          yiyi: 'Invitation Code',
          fuihiss: 'copy',
          dew: 'My Invitation QR Code',
          seewewe: 'Yesterday',
          res: 'Group',
          iangli: 'Yesterday\'s Awards（TRX）',
          erwwe: 'Total commission',
          bsjijs: 'My Team'
        },
        it: {
          fuhzi: 'Copiato con successo',
          yiyi: 'Codice invito',
          fuihiss: 'Restauro',
          dew: 'Il mio codice QR dell\'invito',
          seewewe: 'Aggiunto ieri',
          res: 'Dimensione del gruppo',
          iangli: 'Premi di ieri（TRX）',
          erwwe: 'Commissione totale',
          bsjijs: 'La mia squadra'
        },
        de: {
          fuhzi: 'Erfolgreich kopiert',
          yiyi: 'Einladungscode',
          fuihiss: 'Wiederherstellung',
          dew: 'Mein Einladungs-QR-Code',
          seewewe: 'Gestern hinzugefügt',
          res: 'Größe der Gruppe',
          iangli: 'Auszeichnungen von gestern（TRX）',
          erwwe: 'Gesamtprovision',
          bsjijs: 'Mein Team'
        }
      }
    }
  },

  created() {
    this.getassets()
  },
  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },
  methods: {
    getassets() {
      indexTeam().then(result => {
        if (result[0] == true) {
          this.zichan = result[1]
        }
      })
    },
    fuzhi() {
      this.$message.success(this.lang[this.lindex].fuhzi)
    }
  }
}
</script>

<style lang="scss">
.wrap {
  background-color: #f8f6f6;
  width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 60px;
  float: left;
}

.toubu {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: bolder;
  color: #fff;
  position: fixed;
  top: 0;
  background-color: #5f9ce7;
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
  margin-top: 50px;
  text-align: center;
  vertical-align: middle;
}

#ganqingwen {
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  width: auto !important;
  clear: both;
}
</style>
