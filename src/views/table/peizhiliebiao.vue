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
      <el-table-column align="center" label="id" width="100">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="公告" width="500">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="內容" width="700">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="類別">
        <template slot-scope="scope">
          {{ scope.row.status | status}}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link class="m-r-15" title="修改" @click="edit(scope.row)" style="margin-right: 15px;float: left">編輯</el-link>
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
import { ConfigUrelist } from '@/api/table'

export default {
  filters: {
    status(status) {
      const statusMap = {
        1: '公告',
        2: '礦機說明',
        3: '理財說明',
        4: 'TRX 匯率',
      }
      return statusMap[status]
    },
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
      ConfigUrelist().then(result => {
          if (result[0] == true) {
            this.listLoading = false
            this.list = result[1]
          }
        }
      )
    },
    edit(data) {
      this.$store.commit('app/GAI_SHU_JU', data)
      this.$router.push('/ConfigUre/edit')
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
