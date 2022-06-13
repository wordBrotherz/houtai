<template>
  <div class="login-container">
    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/teams" class="router-link-active">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px; color: black;"> &lt; </span>
        </a>
        <span> {{ lang[lindex].sesee }}</span>
      </div>

      <div class="bbbb">
        <div class="nihaonihao">
          <span class="abasd" :class="xz == 1 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(1)">{{ lang[lindex].yiji }}</span>
        </div>
        <div class="nihaonihao">
          <span class="abasd" :class="xz == 2 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(2)">{{ lang[lindex].erji }}</span>
        </div>
        <div class="nihaonihao">
          <span class="abasd" :class="xz == 3 ? 'xuanzhong' : 'meiyou'" @click="xuanzhong(3)">{{ lang[lindex].sni }}</span>
        </div>
      </div>
      <div class="content">
        <div>
<!--          <div class="yuefen m-t-40"> - 2022-6 -</div>-->

          <div class="liebiao m-t-15" v-for="items in list">
            <div class="lie-2">
              <div class="lie-2-touxiang">
                <img src="https://img2.baidu.com/it/u=180286244,263138673&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=500"></div>
              <div style="float: right; height: 50px; line-height: 50px; margin-right: 30px;">
                <b> {{ items.username }} </b>
              </div>
            </div>
          </div>
        </div>
        <div class="yuefen"> {{ lang[lindex].end }}</div>
      </div>
      <FOOTER/>
    </div>
  </div>
</template>

<script>
import { YesterdayList } from '@/api/user'
import FOOTER from '@/views/login/footerCommon'

export default {
  components: {
    FOOTER
  },

  data() {
    return {
      xz: 1,
      loginForm: {
        adminuser: '',
        password: ''
      },
      list: [],
      lindex: 'en',
      lang: {
        zh:{
          sesee: '昨日新增',
          yiji: '一級',
          erji: '二級',
          sni: '三級',
          end: '我是有底線的人',
        },
        en:{
          sesee: 'Added yesterday',
          yiji: 'Level 1',
          erji: 'Level 2',
          sni: 'Level 3',
          end: 'end',
        },
        it:{
          sesee: 'Aggiunto ieri',
          yiji: 'Grado 1',
          erji: 'Grado 2',
          sni: 'Grado 3',
          end: 'Fine',
        },
        de:{
          sesee: 'Gestern hinzugefügt',
          yiji: 'Klasse 1',
          erji: 'Klasse 2',
          sni: 'Klasse 3',
          end: 'Ende',
        },
      }
    }
  },

  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },

  created() {
    this.getassets(1)
  },

  methods: {
    getassets(value) {
      YesterdayList(value, 200, 1).then(result => {
        if (result[0] == true) {
          this.list = result[1]
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
.wrap {
  background-color: #f8f6f6;
  width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 60px;
  float: left;
}

.toubu {
  background-color: #fff;
  color: black;
}

.bbbb {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
}

.nihaonihao {
  width: 33%;
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

.content {
  margin-top: 35px;
}

.yuefen {
  color: #928b8b;
  width: 100%;
  text-align: center;
  font-size: 14px;
}

.m-t-40 {
  margin-top: 40px;
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

.m-t-15 {
  margin-top: 15px;
}

.lie-2-touxiang {
  width: 50px;
  height: 50px;
  float: left;
}

.lie-2-touxiang img {
  width: 100%;
  float: right;
}
</style>
