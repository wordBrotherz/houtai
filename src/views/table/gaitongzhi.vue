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
        <el-button type="primary" @click="onSubmit">編輯</el-button>
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
        id: '',
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
    this.form.name = data.notice_name
    this.form.content = data.content
    this.form.code = data.status
  },
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

