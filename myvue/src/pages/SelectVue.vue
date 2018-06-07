<template>
  <div class="select-page">
    <el-button type="primary" @click="update(false)">修改</el-button>
    <p v-if="flag">{{ showdata.provinceName }} {{ showdata.cityName }}</p>
    <select-component @getprovince="getprovince" @getcity="getcity" v-if="!flag" :pid="showdata.province" :cid="showdata.city" :load="true" @save="update"></select-component>
    
  </div>
</template>

<script>
import SelectComponent from '../components/SelectComponent.vue'
export default {
  data () {
    return {
      showdata: {
        province: 1,
        city: 2,
        provinceName: '河南',
        cityName: '信阳'
      },
      flag: true
    }
  },
  components: {
    SelectComponent
  },
  methods: {
    update (flag) {
      this.flag = flag
    },
    getprovince (val, pname) {
      this.showdata.province = val
      this.showdata.provinceName = pname
    },
    getcity (val, cname) {
      this.showdata.city = val
      this.showdata.cityName = cname
    }
  }
}
</script>

<style scoped>
</style>
