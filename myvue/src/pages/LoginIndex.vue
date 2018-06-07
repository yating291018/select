<template>
  <div class="page-index">
    <h3>管理系统</h3>
    <form class="formstyle">
        <p>
          <input type="text" placeholder="输入用户名"/>
        </p>
        <p>
          <input type="text" placeholder="输入密码"/>
        </p>
        <p>
          <input type="text" placeholder="输入验证码" class="codeinput">
          <span class="code" @click="changeCode">
            <span style="color: #ff0099">{{ firstnumber }}</span> + <span style="color: #ff3399">{{ secondnumber }}</span>
          </span>
        </p>
        <p>
          <input type="submit" value="登陆"/>
        </p>
    </form>
  </div>
</template>
<script>
import axios from '../server/server.js'
export default {
  data () {
    return {
      firstnumber: 1,
      secondnumber: 2
    }
  },
  computed: {
  },
  mounted () {
    axios.get('https://crayfish.elemecdn.com/perf.js@json/sdk-config/WEB://h5.ele.me/msite/').then(res => {
      console.log('res', res)
    })
  },
  methods: {
    changeCode () {
      this.firstnumber = Math.floor(Math.random() * 10)
      this.secondnumber = Math.floor(Math.random() * 10)
    }
  }
}
</script>
<style scoped>
.page-index {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%)
}
h3 {
  text-align: center;
}
.formstyle {
  width: 100%;
}
.formstyle p{
  height: 40px;
  width: 100%;
  line-height: 40px;
  margin: 10px 0;
}
.formstyle p input {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  outline: none;
  text-indent: 10px;
}
.formstyle p .codeinput {
  width: 100px;
}
.code {
  float: right;
  width: 150px;
  text-align: center;
  font-size: 24px;
}
.formstyle p input[type='submit'] {
  background: #0093ff;
  font-size: 16px;
  color: #fff;
}
</style>
