<template>
  <div class="login-container">

    <div class="wrap w-100-per">
      <div class="toubu">
        <a href="#/my" class="router-link-active">
          <span style="position: absolute; left: 15px; top: 2px; font-weight: bolder; font-size: 25px;"> &lt; </span>
        </a>
        <span>{{ lang[lindex].wode }}</span>
      </div>

      <div class="content">
        <div class="liebiao m-t-15">
          <a class="" @click="xuanze('zh')">
            <div class="lie-2">
              <b> 繁体中文 </b>
            </div>
          </a>
        </div>

        <div class="liebiao m-t-15">
          <a class="" @click="xuanze('en')">
            <div class="lie-2"><b> English </b></div>
          </a>
        </div>

        <div class="liebiao m-t-15">
          <a class="" @click="xuanze('it')">
            <div class="lie-2"><b> Italian </b></div>
          </a>
        </div>

        <div class="liebiao m-t-15">
          <a class="" @click="xuanze('de')">
            <div class="lie-2"><b> German
            </b></div>
          </a>
        </div>

      </div>
      <FOOTER/>
    </div>
  </div>
</template>

<script>

import FOOTER from '@/views/login/footerCommon'

export default {
  components: {
    FOOTER
  },
  name: 'Login',
  data() {
    return {
      loginForm: {
        adminuser: '',
        password: ''
      },
      lindex: 'en',
      lang: {
        zh: {
          wode: '选择语言'
        },
        en: {
          wode: 'Select Language'
        },
        it: {
          wode: 'Selezionare la lingua'
        },
        de: {
          wode: 'Sprache auswählen'
        }
      }
    }
  },
  mounted() {
  },

  methods: {
    xuanze( valje) {
      window.localStorage.setItem('lang', valje);

      setTimeout(() => {
        this.$router.push('/home')
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.toubu {
  background-color: #fff;
  color: black;
}

.lie-2 {
  text-align: center;
  line-height: 55px;
  border-radius: 5px;
  color: #0a0a0a;
}

.content {
  padding-top: 50px;
}

.m-t-15 {
  margin-top: 15px;
}

.lie-2 {
  text-align: center;
  line-height: 55px;
  border-radius: 5px;
  color: #0a0a0a;
}

.liebiao {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 15px;
  height: 50px;
  box-shadow: 0 10px 10px #e3e0e0;
}


</style>
