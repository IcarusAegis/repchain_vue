<template>
  <div>
    <h1>当前链总高度：{{this.chain_info['result']['height']}}</h1>
    <div>
      <h1>块高度：<input v-model="height" placeholder="" style="width: 100px;"></h1>
      <button @click="post_height()">确定</button>
    </div>

  <div v-if="flag">
    <h1>blockinfo</h1>
    <el-table
        :data="this.tableData"
        style="width: 100%">
      <el-table-column prop="no" label="no" width="60%"></el-table-column>
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="type" label="type"></el-table-column>
      <el-table-column prop="ipt-function" label="ipt-function"></el-table-column>
      <el-table-column prop="cid-chaincodeName" label="cid-chaincodeName"></el-table-column>
      <el-table-column prop="cid-version" label="cid-version" width="100%"></el-table-column>
      <el-table-column prop="signature-certId-creditCode" label="signature-certId-creditCode"></el-table-column>
      <el-table-column prop="signature-certId-certName" label="signature-certId-certName"></el-table-column>
      <el-table-column prop="signature-tmLocal" label="signature-tmLocal"></el-table-column>
      <el-table-column prop="signature-hash" label="signature-hash"></el-table-column>
      <el-table-column prop="args" label="args"></el-table-column>
    </el-table>
  </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "blockinfo",
  created() {
    // this.test();
    this.get_chain_info();


  },
  activated() {
  },
  data(){
    return {
      result:{},
      transactions:[],
      flag:false,
      tableData: [],//表格数据
      height:"",//
      args:"",//
      chain_info:'',//


    }
  },
  methods:{
    test(){
      axios.get('http://127.0.0.1:5000/blockinfo' ).then((res)=>{
        console.log(res.data);
        this.tableData=res.data;

        // this.result=res.data.result;
        // this.transactions=res.data.result.transactions;
        // this.tableData.id=res.data.result.transactions.id;
        if (this.result!=null){
          this.flag=true;
        }

      })
    },
    get_chain_info(){
      axios.get('http://127.0.0.1:5000/chain_info').then((res)=>{
        console.log(res.data);
        this.chain_info=res.data;

      })
    },

    post_height(){
      const path = 'http://127.0.0.1:5000/height';
      var dict = {"height":this.height};
      console.log(dict)
      axios.post(path,(dict)).then((res) =>{
        this.tableData=res.data;
        this.args=res.data[0].args;
        console.log(this.args);
        console.log(res.data)
        setTimeout(() => {
          if (this.result!=null){
            this.flag=true;
          }
          //console.log(res.data)
          // this.result();

        },500);
      })
          .catch((error) => {
            console.error(error);
          });

    },
  },
}



</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
