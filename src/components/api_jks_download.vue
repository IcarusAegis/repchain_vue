<template>
  <div>
    <h1>api jks下载测试</h1>
    <div>
      <el-form :label-position="labelPosition" label-width="80px" >
        <el-form-item label="token">
          <el-input v-model="download_info.token"></el-input>
        </el-form-item>
        <el-form-item label="repcertid">
          <el-input v-model="download_info.repcertid"></el-input>
        </el-form-item>
        <el-form-item label="username">
          <el-input v-model="download_info.username"></el-input>
        </el-form-item>
        <el-form-item label="passwd">
          <el-input v-model="download_info.passwd"></el-input>
        </el-form-item>
      </el-form>

      <el-button @click="submit_api_login">提交</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "api_jks_download",
  data(){
    return{
      labelPosition: 'left',
      download_info: {
        token: '',
        repcertid: '',
        username: '',
        passwd:'',

      },
      token:"",
      token_flag:false
    };

  },
  methods:{
    submit_api_login(){
      axios.post('http://127.0.0.1:5000/submit_jks_download',this.download_info).then((res)=>{
        console.log(res.data);
        if (res.data['code']!=200){
          let info;
          info='code:'+String(res.data['code'])+'\n'+'message:'+String(res.data['message'])
          // alert()
          alert(info)
        }
        else{
          alert('下载成功')

        }
  })
},
  }}
</script>

<style scoped>

</style>
