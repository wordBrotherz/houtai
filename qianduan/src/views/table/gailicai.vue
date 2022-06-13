<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="天數" style="width: 500px;">
        <el-input v-model="form.day" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="最小額度" style="width: 500px;">
        <el-input v-model="form.minimum"/>
      </el-form-item>

      <el-form-item label="最大額度" style="width: 500px;">
        <el-input v-model="form.maximum"/>
      </el-form-item>

      <el-form-item label="盈利百分比" style="width: 500px;">
        <el-input v-model="form.percentage"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">編輯</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { financedd } from '@/api/table'

export default {
  data() {
    return {
      form: {
        id: '',
        day: '',
        minimum: '',
        maximum: '',
        percentage: '',
      }
    }
  },
  methods: {
    onSubmit() {
      financedd(this.form).then(result => {
          if (result[0] == true) {
            this.$message.success("編輯成功")
            this.form = {}
          } else {
            this.$message.error("編輯失敗")
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
    this.form.day = data.day
    this.form.minimum = data.amount_s
    this.form.maximum = data.amount_m
    this.form.percentage = data.percentage
  },
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

