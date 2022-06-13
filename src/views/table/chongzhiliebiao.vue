<template>
  <div class="app-container">
    <el-form :model="form" label-width="100px">
      <el-form-item label="賬單編號" style="float: left;" >
        <el-input v-model="form.number" style="width: 250px; float: left;"/>
      </el-form-item>

      <el-form-item label="狀態" style="float: left;">
        <el-select v-model="form.status" placeholder="狀態選擇">
          <el-option label="交易完成" value="1"/>
          <el-option label="交易失敗" value="2"/>
          <el-option label="待審核" value="3"/>
        </el-select>
      </el-form-item>

      <el-form-item label="創建時間"  style="float: left;">
        <el-date-picker
          type="dates"
          v-model="form.time"
          placeholder="选择一个或多个日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="用戶id" style="float: left;" >
        <el-input v-model="form.userid" style="width: 200px; float: left;"/>
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
      <el-table-column align="center" label="用户id" >
        <template slot-scope="scope">
          {{ scope.row.userid }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="用户名" >
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="賬單編號">
        <template slot-scope="scope">
          {{ scope.row.singel_number }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="類別" >
        <template slot-scope="scope">
          {{ scope.row.account | leibie }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="類型" >
        <template slot-scope="scope">
          {{ scope.row.profit_status | profit_status }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="原餘額">
        <template slot-scope="scope">
          {{ scope.row.original_amount }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="變更金額">
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
          {{ scope.row.bill_status | tttttt  }}
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
import { fundingrecharge } from '@/api/table'

export default {
  filters: {
    leibie(status) {
      const statusMap = {
        1: '收入',
        2: '支出'
      }
      return statusMap[status]
    },

    profit_status(status) {
      const statusMap = {
        1: '充值',
        2: '提现',
        3: '佣金',
        4: '挖矿收益',
        5: '理财利息',
        6: '投资挖矿',
        7: '投资理财',
        8: '挖矿提取',
        9: '理财提取',
      }
      return statusMap[status]
    },
    tttttt(status) {
      const statusMap = {
        1: '交易完成',
        2: '交易失敗',
      }
      return statusMap[status]
    },

  },
  data() {
    return {
      form: {
        number: '',
        status: '',
        time: '',
        userid: '',
        page: 1,
        count: 100,
        order: 'desc'
      },
      list: {},
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fundingrecharge(this.form).then(result => {
        if (result[0] == true) {
          this.listLoading = false
          this.list = result[1]
        }
      })
    },
    onSubmit() {
      this.fetchData()
    },
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
