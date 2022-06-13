<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="礦機等級" style="width: 500px;">
        <el-input v-model="form.grade" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="最小金額" style="width: 500px;">
        <el-input v-model="form.minimum" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="最大金額" style="width: 500px;">
        <el-input v-model="form.maximum" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="功率" style="width: 500px;">
        <el-input v-model="form.power" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="算力" style="width: 500px;">
        <el-input v-model="form.rate" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="費電量" style="width: 500px;">
        <el-input v-model="form.energy_used" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="日回報率" style="width: 500px;">
        <el-input v-model="form.day_profit" placeholder="數字1,數字2 用逗號分割"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
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
        day_profit: '',
      }
    }
  },
  methods: {
    onSubmit() {
      addMiningn(this.form).then(result => {
          if (result[0] == true) {
            this.$message.success("添加成功")
            this.form = {}
          } else {
            this.$message.error("添加失敗")
          }
        }
      )
    },
    onCancel() {
      this.form = {}
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

