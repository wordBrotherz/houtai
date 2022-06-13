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
        <el-table-column align="center" label="用戶名稱">
          <template slot-scope="scope">
            {{ scope.row.username }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="狀態">
          <template slot-scope="scope">
            {{ scope.row.account| statusFilter }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="原餘額">
          <template slot-scope="scope">
            {{ scope.row.original_amount }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="變更餘額">
          <template slot-scope="scope">
            {{ scope.row.change_amount }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="當前餘額">
          <template slot-scope="scope">
            {{ scope.row.current_amount }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="賬單狀態">
          <template slot-scope="scope">
            {{ scope.row.bill_status| bbbbb }}
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
import { UserWithdraw } from '@/api/user'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: '收入',
        2: '支出'
      }
      return statusMap[status]
    },
    bbbbb(status) {
      const statusMap = {
        1: '交易完成',
        2: '交易失敗',
        3: '待審核'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      params: {
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
      UserWithdraw().then(result => {
        if (result[0] == true) {
          this.listLoading = false
          this.list = result[1]
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
