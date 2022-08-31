<template>
  <div>
    <h1>api 上链测试</h1>
    <div>
      <el-form :label-position="labelPosition" label-width="80px" >
        <el-form-item label="token">
          <el-input v-model="chain_info.token"></el-input>
        </el-form-item>
        <el-form-item label="data">
          <el-input v-model="chain_info.data"></el-input>
        </el-form-item>
      </el-form>

      <el-button @click="submit_api_login">提交</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "api_oper_chain",
  data(){
    return{
      labelPosition: 'left',
      chain_info: {
        token : "",
        data:''
      },

    };

  },
  methods:{
    submit_api_login(){
      axios.post('http://127.0.0.1:5000/submit_chain',this.chain_info).then((res)=>{
        console.log(res.data);
        if (res.data['status']==400){
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
        else if(res.data['code']==200){
          alert('成功')
        }
        else {
          let info;
          info='code:'+String(res.data['code'])+'\n'+'message:'+String(res.data['message'])
          // alert()
          alert(info)
        }



      })
    },
}}
</script>

<style scoped>

</style>
