<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column
        prop="date"
        label="日期"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址">
        </el-table-column>
        <el-table-column>
        <template slot-scope="scope">
            <el-button  type="primary" @click="show(scope.row.index)">点击</el-button>
        </template>
        </el-table-column>
    </el-table>
    <test-dialog ref="dialogflag"></test-dialog>
  </div>

</template>

<script>
import TestDialog from '../components/TestDialog.vue'
import axios from 'axios'
export default {
  data () {
    return {
      tableData: [
        {
          index: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          index: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          index: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          index: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      data1: [
        {label: 'iphone', checked: true},
        {label: 'iphone1', checked: true},
        {label: 'iphone2', checked: false},
        {label: 'iphone3', checked: true},
        {label: 'iphone4', checked: true}
      ],
      data2: [
        {label: 'iphone', checked: true},
        {label: 'iphone21', checked: true},
        {label: 'iphone22', checked: false},
        {label: 'iphone23', checked: false},
        {label: 'iphone24', checked: true}
      ],
      data3: [
        {label: 'iphone', checked: false},
        {label: 'iphone31', checked: true},
        {label: 'iphone32', checked: false},
        {label: 'iphone33', checked: true},
        {label: 'iphone34', checked: false}
      ],
      data4: [
        {label: 'iphone', checked: true},
        {label: 'iphone41', checked: true},
        {label: 'iphone42', checked: false},
        {label: 'iphone43', checked: true},
        {label: 'iphone44', checked: false}
      ]
    }
  },
  components: {
    TestDialog
  },
  methods: {
    getData (index) {
      axios.get('https://crayfish.elemecdn.com/perf.js@json/sdk-config/WEB://h5.ele.me/msite/').then(res => {
        this.$refs.dialogflag.obj = this['data' + index]
      })
    },
    show (index) {
      this.$refs.dialogflag.dialogVisible = true
      this.getData(index)
    }
  }
}
</script>

<style scoped>
</style>
