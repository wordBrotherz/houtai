<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'App',

  async created() {
    let lang = (navigator.language || navigator.browserLanguage).toLowerCase()

    if (lang.includes('-')) {
      lang = lang.split('-')
      lang = lang[0]
    }

    if (lang == 'it') {
    } else if (lang == 'de') {
    } else if (lang == 'en') {
    } else if (lang == 'zh') {
    } else {
      lang = 'en'
    }

    let isset = window.localStorage.getItem('lang') || false

    if (!isset) {


      // it->意大利; de->德语; en->英文; zh->中文
      await window.localStorage.setItem('lang', lang)
    }



  }
}
</script>

<style lang="scss">
#app, body, html {
  font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
  background-color: #f8f6f6;
}

.toubu {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: bolder;
  background-color: #fff;
  position: fixed;
  top: 0;
}

.content {
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
}
</style>
