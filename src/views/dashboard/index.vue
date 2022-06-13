<template>
  <div class="dashboard-container">
    <div data-v-c9180544="" data-v-64cf4d83="" class="dashboard-container">
      <div data-v-c9180544="" class="dashboard-text" style="text-align: center; line-height: 200px;">
        <div data-v-c9180544=""
             style="width: 49%; height: 200px; background-color: rgb(20, 130, 240); float: left; margin-right: 20px;"
        ><span data-v-c9180544="">平臺總用戶數量：</span> {{  info.users}}
        </div>
        <div data-v-c9180544="" style="width: 49%; height: 200px; background-color: orangered; float: right;"><span
          data-v-c9180544=""
        >昨日注冊用戶數量：</span>{{  info.yesterday_user}}
        </div>
        <div data-v-c9180544="" style="margin-top: 20px; width: 100%; float: left;">
          <div data-v-c9180544=""
               style="width: 49%; height: 200px; background-color: darkgreen; float: left; margin-right: 20px;"
          ><span data-v-c9180544="">本月注冊用戶數量：</span>{{  info.month_user}}
          </div>
          <div data-v-c9180544="" style="width: 49%; height: 200px; background-color: rgb(132, 34, 112); float: right;">
            <span data-v-c9180544="">充值用戶數量：</span> {{  info.recharge_users}}
          </div>
        </div>
        <div data-v-c9180544="" style="margin-top: 20px; width: 100%; float: left;">
          <div style="width: 49%; height: 200px; background-color: rgb(203, 117, 24); float: left; margin-right: 20px;"><span data-v-c9180544="">充值總額：</span>  {{  info.recharge}}
          </div>
          <div data-v-c9180544="" style="width: 49%; height: 200px; background-color: bisque; float: right;"><span>提現總額：</span>  {{  info.withdraw}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { getIndex } from '@/api/table'

export default {
  name: 'Dashboard',
  data() {
    return {
      info: {}
    }
  },
  created() {

    this.getIndex()
  },
  methods: {
    getIndex() {
      getIndex().then(result => {
        if (result[0] == true) {
          this.info = result[1]
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-text {
  font-size: 30px;
  line-height: 46px;
}
.dashboard-container {
  margin: 30px;
}
</style>
