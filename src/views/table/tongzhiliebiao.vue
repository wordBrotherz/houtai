<template>
  <div class="app-container">
    <el-form :model="form" label-width="100px">

      <el-form-item label="類型選擇" style="float: left;">
        <el-select v-model="form.code" placeholder="類型選擇">
          <el-option label="通知" value="1"/>
          <el-option label="活動" value="2"/>
        </el-select>
      </el-form-item>

      <el-form-item  style="float: left; margin-left: -30px;">
        <el-button type="primary" @click="onSubmit">查詢</el-button>
      </el-form-item>
    </el-form>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="id" width="110">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>

      <el-table-column align="left" label="標題" width="300">
        <template slot-scope="scope">
          {{ scope.row.notice_name }}
        </template>
      </el-table-column>

      <el-table-column align="left" label="內容"  width="500">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="類型" >
        <template slot-scope="scope">
          {{ scope.row.status | profit_status }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="更新時間">
        <template slot-scope="scope">
          {{ scope.row.update_at }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="創建時間">
        <template slot-scope="scope">
          {{ scope.row.create_at }}
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-link class="m-r-15" title="修改" @click="edit(scope.row)" style="margin-right: 15px;float: left">編輯</el-link>
          <el-link class="m-r-15" title="删除" @click="del(scope.row.id)" type="danger">刪除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye"
         style="float: right; margin:13px; background: white; width: 100%; padding: 5px;"
    >
      <el-pagination
        background
        :page-size="100"
        :pager-count="11"
        layout="prev, pager, next"
        :total="100"
        style="float: right"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { noticedel, noticeshow } from '@/api/table'

export default {
  filters: {
    profit_status(status) {
      const statusMap = {
        1: '通知',
        2: '活動',
      }
      return statusMap[status]
    },
  },
  data() {
    return {
      form: {
        code: 1,
        page: 1,
        count: 100,
        order: 'desc'
      },
      list: [],
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      noticeshow(this.form.code, this.form.page, this.form.count, this.form.order).then(result => {
        if (result[0] == true) {
          this.listLoading = false
          this.list = result[1]
        }
      })
    },
    onSubmit() {
      this.fetchData()
    },
    edit(data) {
      this.$store.commit('app/GAI_SHU_JU', data)
      this.$router.push('/notice/edit')
    },
    del(id) {
      noticedel(id).then(result => {
        if (result[0] == true) {
          this.$message.success('刪除成功')
          this.fetchData()
        } else {
          this.$message.error('刪除失敗')
        }
      })
    }
  }
}
</script>

<style scoped>
.app-container {
  overflow: auto;
  width: 100%;
  float: left;
  box-sizing: border-box;
}
</style>
