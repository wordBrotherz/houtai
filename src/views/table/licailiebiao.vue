<template>
  <div class="app-container">
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

      <el-table-column align="left" label="天數">
        <template slot-scope="scope">
          {{ scope.row.day }}
        </template>
      </el-table-column>

      <el-table-column align="left" label="最小額度">
        <template slot-scope="scope">

          {{ scope.row.amount_s }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="最大額度" >
        <template slot-scope="scope">
          {{ scope.row.amount_m }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="盈利百分比" >
        <template slot-scope="scope">
          {{ scope.row.percentage || 0}}
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
import { noticedel, financelist } from '@/api/table'

export default {
  filters: {
    profit_status(status) {
      const statusMap = {
        1: '是',
        0: '否',
      }
      return statusMap[status]
    },
    status(status) {
      const statusMap = {
        1: '正常',
        0: '禁用',
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
      financelist( this.form.page, this.form.count, this.form.order).then(result => {
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
      this.$router.push('/finance/edit')
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
