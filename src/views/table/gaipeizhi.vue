<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="類型" style="width: 500px;">
        <el-input v-model="form.rate" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="標題" style="width: 500px;">
        <el-input v-model="form.energy_used" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="內容" style="width: 500px;">
        <el-input type="textarea" v-model="form.day_profit" placeholder="數字1,數字2 用逗號分割"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">編輯</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addMiningn } from '@/api/table'

export default {
  data() {
    return {
      form: {
        grade: '',
        minimum: '',
        maximum: '',
        power: '',
        rate: '',
        energy_used: '',
        day_profit: ''
      }
    }
  },
  methods: {
    onSubmit() {
      addMiningn(this.form).then(result => {
          if (result[0] == true) {
            this.$message.success('更新成功')
            this.form = {}
          } else {
            this.$message.error('更新失敗')
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

