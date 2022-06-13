<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="用戶id" style="width: 500px;">
        <el-input v-model="form.id" placeholder="先去用戶列表查詢用戶id"/>
      </el-form-item>

      <el-form-item label="充值金額" style="width: 500px;">
        <el-input v-model="form.recharge" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="貨幣編號" style="width: 500px;">
        <el-input v-model="form.currency" readonly placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="類別" style="width: 500px;">
        <el-input v-model="form.where" placeholder="挖礦輸入1，理財產品輸入2"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">確認</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { TopScore } from '@/api/table'

export default {
  data() {
    return {
      form: {
        id: '',
        recharge: '',
        currency: 'TRX',
        where: '',
      }
    }
  },
  methods: {
    onSubmit() {
      TopScore(this.form).then(result => {
          if (result[0] == true) {
            this.$message.success('操作成功')
            this.form = {}
          } else {
            this.$message.error('操作失敗')
          }
        }
      )
    },
    onCancel() {
      this.form = {}
    }
  },
  mounted() {
    let data = this.$store.state.app.gaishuju

    this.form.id = data.id
    this.form.grade = data.grade
    this.form.minimum = data.amount_s
    this.form.maximum = data.amount_m
    this.form.power = data.power
    this.form.rate = data.rate
    this.form.energy_used = data.electricity
    this.form.day_profit = data.response_rate
  },
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

