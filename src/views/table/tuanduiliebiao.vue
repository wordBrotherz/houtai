<template>
  <div class="app-container">
    <el-form :model="form" label-width="100px">

      <el-form-item label="用戶id" style="float: left;" >
        <el-input v-model="form.userid" style="width: 250px; float: left;"/>
      </el-form-item>


      <el-form-item label="等級" style="float: left;">
        <el-select v-model="form.grade" placeholder="等級">
          <el-option label="一級" value="1"/>
          <el-option label="二級" value="2"/>
          <el-option label="三級" value="3"/>
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
      <el-table-column align="center" label="用戶id" width="110">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>

      <el-table-column align="left" label="用戶名稱">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="層級" >
        <template slot-scope="scope">
          {{ scope.row.level | jjj }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="代理人id" >
        <template slot-scope="scope">
          {{ scope.row.agentid  }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="推廣員id" >
        <template slot-scope="scope">
          {{ scope.row.promoter  }}
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
import { noticedel, teamshow } from '@/api/table'

export default {
  filters: {
    jjj(status) {
      const statusMap = {
        1: '一級',
        2: '二級',
        3: '三級',
      }
      return statusMap[status]
    },
  },
  data() {
    return {
      form: {
        grade: '',
        userid: '3',
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
      teamshow(this.form).then(result => {
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
