<template>
  <div class="login-container wrap w-100-per">
    <div class="toubu" style="background-color: #f6f8f9 !important;">
      <router-link to="/home">
        <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: black;"> &lt; </span>
      </router-link>
      <span style="color: black">{{ lang[lindex].wewew }}</span>
    </div>

    <div class="content">
      <div class="dq liebiao">
        <span class="biaoti" style="color: white; margin-bottom: 30px;">{{ lang[lindex].asa }}</span>
        <div class="sansna">
          <div class="sansansa" style="text-align: left;">
            <div style="width: 100%; color: white;">
              <b> {{ lang[lindex].sdsds }} </b>
            </div>
            <div class="valuess">{{ kuangji.rate }} H/S</div>
          </div>

          <div class="sansansa">
            <div style="color: white;">
              <b>{{ lang[lindex].rrrrr }}</b>
            </div>
            <div class="valuess">{{ lang[lindex].yue }} {{ kuangji.rate | nonno }}</div>
          </div>

          <div class="sansansa" style="text-align: right;">
            <div style="color: white;">
              <b>{{ lang[lindex].bddsd }}</b>
            </div>
            <div class="valuess">{{ kuangji.power }} W</div>
          </div>
        </div>
      </div>

      <div class="liebiao" v-for="itmes in list" :key="itmes.id">
        <span class="biaoti"> {{ lang[lindex].beeds }}  (TRX:) {{ itmes.amount_s + ' - ' + itmes.amount_m }}  </span>
        <!--        <span style="float: right; font-size: 25px; font-weight: bolder;" @click="tiaozhuan(itmes)"> > </span>-->

        <ul style="color: rgb(106, 103, 103);">
          <li>
            <span style="float: left;"> {{ lang[lindex].gagsd }}</span>
            <span style="float: right;">{{ itmes.power }} W</span>
          </li>

          <li>
            <span style="float: left;">  {{ lang[lindex].weweweww }} </span>
            <span style="float: right;">{{ itmes.rate }} H/S</span>
          </li>

          <li>
            <span style="float: left;"> {{ lang[lindex].iiii }} </span>
            <span style="float: right;">{{ itmes.electricity }} Kw</span>
          </li>

          <li>
            <span style="float: left;">  {{ lang[lindex].rrrr }}  </span>
            <span style="float: right;"> {{ itmes.response_rate | nonno }} </span>
          </li>
        </ul>
      </div>
    </div>
    <FOOTER/>
  </div>
</template>

<script>
import { userminer, minerlist } from '@/api/user'
import FOOTER from '@/views/login/footerCommon'

export default {
  components: {
    FOOTER
  },
  data() {
    return {
      kuangji: {
        rate: 0,
        power: 0,
        response_rate: 0
      },

      list: [],

      lindex: 'en',
      lang: {
        zh: {
          wewew: '礦機列表',
          asa: '當前配置',
          sdsds: '我的算力',
          rrrrr: '日回報率',
          yue: '約',
          bddsd: '礦機功率',
          beeds: '條件資金',
          gagsd: '功率',
          weweweww: '算力',
          iiii: '費電量',
          rrrr: '日回報率',
        },
        en: {
          wewew: 'Mining Machine List',
          asa: 'Current Configuration',
          sdsds: 'My Calculation Power',
          rrrrr: 'Daily Return Rate',
          yue: 'About',
          bddsd: 'Mine power',
          beeds: 'Conditional Funds',
          gagsd: 'Power',
          weweweww: 'Algorithm power',
          iiii: 'Power consumption',
          rrrr: 'Daily Return Rate',
        },
        it: {
          wewew: 'Elenco delle macchine da miniera',
          asa: 'Configurazione attuale',
          sdsds: 'Il mio potere di contare',
          rrrrr: 'Tasso di rendimento giornaliero',
          yue: 'Circa.',
          bddsd: 'Potenza della miniera',
          beeds: 'Fondi condizionati',
          gagsd: 'Potenza',
          weweweww: 'Potenza algoritmica',
          iiii: 'Consumo di energia',
          rrrr: 'Tasso di rendimento giornaliero',
        },
        de: {
          wewew: 'Liste der Bergbaumaschinen',
          asa: 'Aktuelle Konfiguration',
          sdsds: 'Meine Zählkraft',
          rrrrr: 'Tägliche Rendite',
          yue: 'Ungefähr.',
          bddsd: 'Minenleistung',
          beeds: 'Bedingte Mittel',
          gagsd: 'Strom',
          weweweww: 'Algorithmische Leistung',
          iiii: 'Stromverbrauch',
          rrrr: 'Tägliche Rendite',
        }
      }
    }
  },
  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },

  filters: {
    nonno(value) {
      let arrr = value.toString().split(',')
      let st = arrr[0] || 0
      let ttt = arrr[1] || st
      return st + ' % ~ ' + ttt + ' %'
    }
  },
  created() {
    this.userminer()
    this.minerlist()
  },
  methods: {
    userminer() {
      userminer().then(result => {
        if (result[0] == true) {
          this.kuangji = result[1]
        }
      })
    },
    minerlist() {
      minerlist().then(result => {
        if (result[0] == true) {
          this.list = result[1]
        }
      })
    },
    tiaozhuan(id) {
      this.$store.commit('user/SET_PARAMS', id)
      this.$router.push('/compute/profile')
    }
  }
}
</script>

<style lang="scss" scoped>
.dq {
  height: 130px;
  background-color: #5f9ce7;
}

.wrap {
  background-color: #f8f6f6;
  width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 60px;
  float: left;
}

.liebiao {
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 15px;
  height: 180px;
  margin-bottom: 15px;
}

.dq {
  height: 130px;
  background-color: #5f9ce7;
}

.biaoti {
  font-size: 18px;
  font-weight: bolder;
  color: #181717;
  margin-bottom: 15px;
}

.sansansa {
  width: 33.3%;
  height: 50px;
  float: left;
  text-align: center;
}

.valuess {
  width: 100%;
  clear: both;
  margin-top: 10px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
}

.sansna {
  width: 100%;
  margin-top: 20px;
  color: #6a6767;
  font-size: 14px;
}

ul {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>
