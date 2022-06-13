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
      <el-table-column align="center" label="礦機id">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="等級">
        <template slot-scope="scope">
          {{ scope.row.grade }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="最小金額">
        <template slot-scope="scope">
          {{ scope.row.amount_s }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="最大金額">
        <template slot-scope="scope">
          {{ scope.row.amount_m }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="功率">
        <template slot-scope="scope">
          {{ scope.row.power }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="算力">
        <template slot-scope="scope">
          {{ scope.row.rate }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="費電量">
        <template slot-scope="scope">
          {{ scope.row.electricity }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="日會爆率">
        <template slot-scope="scope">
          {{ scope.row.response_rate | response_rate }}
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
    <div class="fenye" style="float: right; margin:13px; background: white; width: 100%; padding: 5px;">
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
import { mininglist, miningdel } from '@/api/table'

export default {
  filters: {
    response_rate(status) {
      let arr = status.toString().split(',')

      let rrrrr = arr[1] || arr[0]

      return arr[0] + '% ~ ' + rrrrr + '%'
    }

  },
  data() {
    return {
      form: {
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
      mininglist(this.form.page, this.form.count, this.form.order).then(result => {
          if (result[0] == true) {
            this.listLoading = false
            this.list = result[1]
          }
        }
      )
    },
    edit(data) {
      this.$store.commit('app/GAI_SHU_JU', data)
      this.$router.push('/computer/edit')
    },
    del(id) {
      miningdel(id).then(result => {
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
