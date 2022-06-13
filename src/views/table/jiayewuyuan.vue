<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="業務員名稱" style="width: 500px;">
        <el-input v-model="form.title" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="密碼" style="width: 500px;">
        <el-input v-model="form.pwd" placeholder="請輸入密碼" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { addSalesman } from '@/api/table'

export default {
  data() {
    return {
      form: {
        title: '',
        pwd: '',
      }
    }
  },
  methods: {
    onSubmit() {
      addSalesman(this.form).then(result => {
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

