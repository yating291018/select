<template>
  <div>
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="60%"
    >
    <el-form>
      <el-checkbox :checked="item.checked" v-for="(item, index) in obj" :key="index">{{ item.label }}</el-checkbox>
    </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      obj: []
    }
  },
  mounted () {
    console.log('执行了')
  },
  methods: {
    handleClose () {

    },
    sendMessage () {
    }
  },
  watch: {
    'obj' (nv) {
    }
  }
}
</script>

<style scoped>
</style>
