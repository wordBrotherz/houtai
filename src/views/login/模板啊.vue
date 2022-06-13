<template>
  <div class="login-container">

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        adminuser: '',
        password: ''
      },
      lindex: 'en',
      lang: {
        zh:{},
        en:{},
        it:{},
        de:{},
      }
    }
  },
  mounted() {
    this.lindex = window.localStorage.getItem('lang')
  },

  methods: {}
}
</script>

<style lang="scss">
#app, body, html {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #f6f8f9;
  font-family: Microsoft YaHei,Arial,Helvetica,sans-serif!important;
}

</style>
