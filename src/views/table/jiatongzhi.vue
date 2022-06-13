<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="標題" style="width: 500px;">
        <el-input v-model="form.name" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="內容" style="width: 500px;">
        <el-input v-model="form.content" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="類別" style="width: 500px;">
        <el-input v-model="form.code" placeholder="通知傳1  活動傳2"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { noticeAdd } from '@/api/table'

export default {
  data() {
    return {
      form: {
        name: '',
        content: '',
        code: '',
      }
    }
  },
  methods: {
    onSubmit() {
      noticeAdd(this.form).then(result => {
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

