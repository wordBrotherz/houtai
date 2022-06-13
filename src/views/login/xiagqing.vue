<template>
  <div class="login-container wrap w-100-per">
    <div class="toubu">
      <a href="#/compute/list">
        <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: black;"> &lt; </span>
      </a>
      <span>配置詳情</span>
    </div>

    <div class="content">
      <div class="liebiao"><span class="biaoti m-b-20">條件資金(TRX:) {{ info.amount_s + '-' + info.amount_m }} </span>
        <div class="m-b-20"></div>
        <ul>
          <li>
            <span style="float: left;">功率</span>
            <span style="float: right; color: rgb(226, 53, 53);">{{ info.power }} W</span>
          </li>

          <li>
            <span style="float: left;">算力</span>
            <span style="float: right; color: rgb(226, 53, 53);">{{ info.rate }} H/S</span>
          </li>

          <li>
            <span style="float: left;">費電量</span>
            <span style="float: right; color: rgb(226, 53, 53);">{{ info.electricity }} Kw</span>
          </li>

          <li>
            <span style="float: left;">日回報率</span>
            <span style="float: right; color: rgb(72, 180, 110);"> {{ info.response_rate |  nonno }}</span>
          </li>
        </ul>
      </div>

      <div class="liebiao" style="height: auto;">
        <span class="biaoti">結算時間</span>
        <div style="margin-top: 15px;"> {{ shuoming.title }}</div>
        <div style="margin-top: 30px;"></div>
        <span class="biaoti">損耗費用</span>
        <div style="margin-top: 5px;"> {{ shuoming.content }}</div>
      </div>
      <button class="login-btn" @click="update()"><b>升級</b></button>
    </div>
    <FOOTER/>
  </div>
</template>

<script>
import { configShow, upgrade } from '@/api/user'
import FOOTER from '@/views/login/footerCommon'
import { mapState } from 'vuex'

export default {
  components: {
    FOOTER
  },

  data() {
    return {
      info: {
        grade: 0,
        amount_s: 0,
        amount_m: 0,
        power: 0,
        rate: 0,
        electricity: 0,
        response_rate: 0
      },
      shuoming: {
        title: '',
        content: ''
      }
    }
  },

  filters: {
    nonno(value) {
      if (value) {
        let arrr = value.toString().split(',')
        let st = arrr[0] || 0
        let ttt = arrr[1] || st
        return st + ' % ~ ' + ttt + ' %'
      }
      return ''
    }
  },
  created() {
    this.fetchData()
    this.info = this.parameters
  },
  methods: {
    fetchData() {
      configShow(2).then(result => {
        if (result[0] == true) {
          this.shuoming = result[1]
        }
      })
    },
    update() {
      upgrade(this.info.grade).then(result => {
        if (result[0] == true) {
          this.$message.success('升級成功')
        } else {
          this.$message.error(result[0])
        }
      })
    }
  },
  computed: {
    ...mapState(
      'user',
      [
        'parameters'
      ]
    )
  }
}
</script>

<style lang="scss" scoped>

.liebiao {
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 15px;
  height: 240px;
  margin-bottom: 15px;
  margin-top: 50px;
}

.biaoti {
  font-size: 18px;
  font-weight: bolder;
  color: #181717;
  margin-bottom: 15px;
}

ul li {
  width: 100%;
  float: left;
  margin-top: 15px;
  font-weight: 700;
}

.liebiao {
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 15px;
  height: 240px;
  margin-bottom: 15px;
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
