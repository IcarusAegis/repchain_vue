<template>
  <div style="padding: 10%">
<div>
  <el-row>
    <el-col :span="10"><div >
    <h3>当前Repchain信息</h3>
    </div></el-col>

    <el-col :span="10"><div >
    <h3>更改Repchain信息</h3>
    </div></el-col>
    <el-col :span="4"><div >
    </div></el-col>
  </el-row>

</div>
  <div>
    <el-row>
      <el-col :span="10"><div >
        {{this.current_repchain_info}}
      </div></el-col>

      <el-col :span="10"><div >
        <div>

          <el-form :inline="true" :model="repchin_info" class="demo-form-inline">
            <el-form-item label="ip">
              <el-input v-model="repchin_info.ip" placeholder="127.0.0.1"></el-input>
            </el-form-item>
            <el-form-item label="port">
              <el-input v-model="repchin_info.port" placeholder="8081"></el-input>
            </el-form-item>



          </el-form>
        </div>
      </div></el-col>
      <el-col :span="4"><div>
        <el-button type="primary" @click="setting_submit">上传</el-button>
        <el-button type="primary" @click="refresh">刷新</el-button>
      </div></el-col>
    </el-row>

  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "setting",
  data(){
    return{
    current_repchain_info:'',
      repchin_info:{
      ip:"127.0.0.1",
        port:"8081",

      }


    }

  },
  created() {
    this.get_setting_info();
  },
  methods:{
    get_setting_info(){
      axios.get('http://127.0.0.1:5000/setting').then((res)=>{
      console.log(res.data);
      this.current_repchain_info=res.data;

      })
    },
    setting_submit(){
      axios.post('http://127.0.0.1:5000/setting_submit',(this.repchin_info)).then((res)=>{
      console.log(res);

      })
    },
    refresh(){
      location.reload();
    }



  },


}
</script>

<style scoped>

</style>
