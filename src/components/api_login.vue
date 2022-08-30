<template>
<div>
  <h1>api登陆测试</h1>
  <div>
  <el-form :label-position="labelPosition" label-width="80px" >
    <el-form-item label="用户名">
      <el-input v-model="login_info.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="login_info.password"></el-input>
    </el-form-item>
    <el-form-item label="客户端id">
      <el-input v-model="login_info.clientId"></el-input>
    </el-form-item>
  </el-form>
  <el-button @click="submit_api_login">提交</el-button>
</div>

  <div v-if="token_flag">
    token:{{this.token}}

  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "api_login",
  data(){
    return{
      labelPosition: 'left',
      login_info: {
        username: '',
        password: '',
        clientId: ''
      },
      token:"",
      token_flag:false
    };

    },
  methods:{
    submit_api_login(){
      axios.post('http://127.0.0.1:5000/submit_api_login',this.login_info).then((res)=>{
        console.log(res.data);
        if (res.data['code']!=200){
          let info;
          info='code:'+String(res.data['code'])+'\n'+'message:'+String(res.data['message'])
          // alert()
          alert(info)
        }
        else{
          alert('token获取成功')
          this.token=res.data['datas']
          this.token_flag=true
        }


      })
    },

  }
  ,
}
</script>

<style scoped>

</style>
