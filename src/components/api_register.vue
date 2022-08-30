<template>
  <div>
    <h1>api注册测试</h1>
    <el-form :label-position="labelPosition" label-width="80px" >
      <el-form-item label="token">
        <el-input v-model="register_info.token"></el-input>
      </el-form-item>
      <el-form-item label="clientId">
        <el-input v-model="register_info.clientId"></el-input>
      </el-form-item>
      <el-form-item label="username">
        <el-input v-model="register_info.username"></el-input>
      </el-form-item>
      <el-form-item label="passwd">
        <el-input v-model="register_info.passwd"></el-input>
      </el-form-item>
      <el-form-item label="phone">
        <el-input v-model="register_info.phone"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="register_info.email"></el-input>
      </el-form-item>
      <el-form-item label="idCard">
        <el-input v-model="register_info.idCard"></el-input>
      </el-form-item>
      <el-form-item label="certType">
        <el-input v-model="register_info.certType"></el-input>
      </el-form-item>
      <el-form-item label="certName">
        <el-input v-model="register_info.certName"></el-input>
      </el-form-item>
      <el-form-item label="certString">
        <el-input v-model="register_info.certString"></el-input>
      </el-form-item>
      <el-form-item label="province">
        <el-input v-model="register_info.province"></el-input>
      </el-form-item>
      <el-form-item label="city">
        <el-input v-model="register_info.city"></el-input>
      </el-form-item>
      <el-form-item label="country">
        <el-input v-model="register_info.country"></el-input>
      </el-form-item>
      <el-form-item label="expry">
        <el-input v-model="register_info.expry"></el-input>
      </el-form-item>


    </el-form>
    <el-button @click="submit_api_login">提交</el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "api_register",
  data(){
    return{
      labelPosition: 'left',
      register_info: {
        token : "",
        clientId: "",
        username: "",
        passwd : "",
        phone : "",
        email : "",
        idCard : "",
        certType : "",
        certName : "",
        certString : "",
        province : "",
        city : "",
        country : "",
        expry : "",
      },

    };

  },
  methods:{
    submit_api_login(){
      axios.post('http://127.0.0.1:5000/submit_api_register',this.register_info).then((res)=>{
        console.log(res.data);
        if (res.data['code']!=200){
          let info;
          let data;
          data=res.data;
          info=String('code:'+data['status']) +'\n'
              + String(data['error'])+'\n'
          +'错误信息：'+'\n';

          for (let i =0; i<data['errors'].length; i++)
          {

            info=info+String(data['errors'][i]['defaultMessage'])+'\n'
          }

          alert(info)


        }
        else{
          alert('注册成功')
        }


      })
    },

  }
}
</script>

<style scoped>

</style>
