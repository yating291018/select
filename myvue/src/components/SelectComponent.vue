<template>
  <div>
    <el-select v-model="province" @change="changeProvinceList" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.pid"
        :label="item.pname"
        :value="item.pid">
      </el-option>
    </el-select>
    <el-select v-model="city" placeholder="请选择">
      <el-option
        v-for="item in citylist"
        :key="item.cid"
        :label="item.cname"
        :value="item.cid">
      </el-option>
    </el-select>
    <el-button type="primary" @click="save(true)">保存</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['pid', 'cid', 'load'],
  data () {
    return {
      province: '',
      city: '',
      options: [],
      citylist: []
    }
  },
  mounted () {
    this.province = this.pid
    this.city = this.cid
    this.getData()
  },
  methods: {
    //得到城市的数据
    getData () {
      axios.get('/api/getCity').then(res => {
        this.options = res.data.data
        console.log('p', this.options)
        if (this.load) {
          this.getcitylist()
        }
      })
    },
    //通过省份信息得到城市信息
    getcitylist () {
      this.citylist = []
      console.log('province', this.province)
      let citylist = this.options.filter(item => {
        if (item.pid === this.province) {
          return item
        }
        return ''
      })
      if (citylist.length !== 0) {
        this.citylist = citylist[0].citys
        console.log('citylist', this.citylist)
      }
    },
    //省份改变得到对应下的城市
    changeProvinceList () {
      this.city = ''
      this.citylist = []
      let citylist = this.options.filter(item => {
        if (item.pid === this.province) {
          return item
        }
        return ''
      })
      if (citylist.length !== 0) {
        this.citylist = citylist[0].citys
        console.log('改变省份下的', this.citylist)
      }
    },
    getProvinceByid () {
      let provincename = this.options.filter(item => {
        if (item.pid === this.province) {
          return item
        }
        return ''
      })
      if (provincename.length !== 0) {
        return provincename[0].pname
      }
      return ''
    },
    getCitynameByid () {
      let cityid = this.citylist.filter(item => {
        if (item.cid === this.city) {
          return item
        }
        return ''
      })
      if (cityid.length !== 0) {
        return cityid[0].cname
      }
      return ''
    },
    save (flag) {
      this.$emit('save', flag)
      this.$emit('getprovince', this.province, this.getProvinceByid())
      this.$emit('getcity', this.city, this.getCitynameByid())
    }
  },
  watch: {
    province (val) {
      this.$emit('getprovince', val, this.getProvinceByid())
    },
    city (val) {
      this.$emit('getcity', val, this.getCitynameByid())
    }
  }
}
</script>
<style scoped>
</style>
