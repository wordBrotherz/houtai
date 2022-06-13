<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="類型" style="width: 500px;">
        <el-input v-model="names" disabled />
      </el-form-item>

      <el-form-item label="標題" style="width: 500px;">
        <el-input v-model="form.title" placeholder="請輸入數字"/>
      </el-form-item>

      <el-form-item label="內容" style="width: 500px;">
        <el-input type="textarea" v-model="form.content"  />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">編輯</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { updateConfigUre } from '@/api/table'

export default {
  data() {
    return {
      names: '',
      form: {
        id: '',
        title: '',
        content: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit() {
      updateConfigUre(this.form).then(result => {
          if (result[0] == true) {
            this.$message.success('更新成功')
            this.form = {}
          } else {
            this.$message.error(result[0])
          }
        }
      )
    },
    onCancel() {
      this.form = {}
    }
  },
  created() {
    this.form = this.gaishuju
    this.form.code = this.gaishuju.status

    if (this.gaishuju.id == 1) {
      this.names = '礦機說明'
    } else if (this.gaishuju.id == 2) {
      this.names = '公告'
    } else if (this.gaishuju.id == 3) {
      this.names = '理財說明'
    } else if (this.gaishuju.id == 4) {
      this.names = 'TRX 匯率'
    }
  },

  computed: {
    ...mapState('app', ['gaishuju'])
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

