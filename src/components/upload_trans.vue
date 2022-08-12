<template>

  <div>
    <div>
      <el-upload
          class="upload-demo"
          ref="upload"
          action="http://127.0.0.1:5000/upload_jks"
          :on-preview="handlePreview"
          :on-remove="handleRemove"

          :file-list="fileList"
          :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
        <div slot="tip" class="el-upload__tip">上传jks文件</div>
      </el-upload>
    </div>
    <div>
      <div>

        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item
              prop="password"
              label="jks密码">
            <el-input v-model="dynamicValidateForm.password"></el-input>
          </el-form-item>
          <el-form-item
              prop="name"
              label="名称">
            <!--          :rules="[-->
            <!--      { required: true, message: '请输入邮箱地址', trigger: 'blur' },-->
            <!--      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }-->
            <!--    ]"-->
            <!--      >-->
            <el-input v-model="dynamicValidateForm.name"></el-input>
          </el-form-item>

          <el-form-item
              prop="trans_id"
              label="合约id">
            <el-input v-model="dynamicValidateForm.trans_id"></el-input>
          </el-form-item>

          <el-form-item
              prop="chaincode_name"
              label="合约名"
              :rules="{
      required: true, message: '合约不能为空'
    }">

            <el-input v-model="dynamicValidateForm.chaincode_name"></el-input>
          </el-form-item>
          <el-form-item
              prop="chaincode_ver"
              label="合约版本"
              :rules="{
      required: true, message: '合约版本不能为空'
    }">

            <el-input v-model="dynamicValidateForm.chaincode_ver"></el-input>
          </el-form-item>

          <el-form-item
              prop="func_name"
              label="方法名"
              :rules="{
      required: true, message: '方法名不能为空'
    }">

            <el-input v-model="dynamicValidateForm.func_name"></el-input>
          </el-form-item>

          <el-form-item
              v-for="(args, index) in dynamicValidateForm.args"
              :label="'参数' + index"
              :key="args.key"
              :prop="'args.' + index + '.value'"
              :rules="{
      required: true, message: '参数不能为空', trigger: 'blur'
    }"
          >
            <el-input v-model="args.value"></el-input><el-button @click.prevent="removeargs(args)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            <el-button @click="addargs">新增参数</el-button>
            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "upload_trans",
  created() {
    this.test();


  },
  activated() {
    this.get_chainData();
  },
  data(){
    return {
      info:[1,2,3],
      height:"",
      data1:{ "result": { "currentBlockHash": "YjI5YTVkZDg3NDRjMGFhODJjZGNhM2E5YmFhMmM0ZmQ2YzNhMmNmODhjOWViYzRjMGZjYmEyMDFlNzY3Y2Y0Ng==", "currentStateHash": "NmRiNWU3ZThkMzg1ZjRkN2Y4MzIyOWY3ODZkMWE5M2NlNDAyNjk1MjIzMDExYjMxMDc3MDY1MzFiYmU2NGU0ZA==", "height": "2", "previousBlockHash": "MWFiNTgzZjM5ODdlMDgzZjU2NjQ2NDA3OGU1ZWU4N2M3N2FkN2QzZjgwNjJjNjc3ODVjNmUyMzBlN2ZiNGI5MQ==", "totalTransactions": "16" } },
      currentBlockHash:{},
      data2:{},
      result:{},
      flag:false,
      chainData:[{
        currentBlockHash:null,
        currentStateHash:null,
        height:null,
        previousBlockHash:null,
        totalTransactions:null,
      }],
      dynamicValidateForm: {
        args: [{
          value: ''
        }],
        pem_password:'',
        name: '',
        trans_id:"",
        chaincode_name:'',
        chaincode_ver:"",
        func_name:'',

      },
    }
  },
  methods:{
    test(){
      axios.get('http://127.0.0.1:5000/' ).then((res)=>{
        console.log(res.data.result.currentBlockHash);
        // this.data2=res.data;
        this.result=res.data.result;
        this.get_chainData();
        // this.chainData[0].currentBlockHash=this.result.currentBlockHash;
        if (this.result!=null){
          this.flag=true;
        }
        // this.currentBlockHash=res.data.result.currentBlockHash;
      })
    },
    get_chainData(){
      this.chainData[0]=this.result;
      // this.$set(this.chainData,0,this.result.currentBlockHash)
      console.log('chain',this.chainData[0])
    },
    post_height(){
      const path = 'http://127.0.0.1:5000/height';
      var dict = {"height":this.height};
      console.log(dict)
      axios.post(path,(dict)).then((res) =>{
        //this.getMessage();
        setTimeout(() => {
          //console.log(res.data)
          // this.result();

        },1000);
      })
          .catch((error) => {
            console.error(error);
          });

    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');

          console.log('submit');
          console.log(this.dynamicValidateForm)
          const path = 'http://127.0.0.1:5000/submit_transinfo';
          axios.post(path,(this.dynamicValidateForm)).then((res) =>{
            console.log(res.data);
            if (res.data==='error'){
              alert('参数类型错误，请重新提交')
            }else if (res.data==='success')
            {
              alert('提交成功')
            }
            else {
              alert('提交错误:'+res.data)
            }
            setTimeout(() => {
            },500);
          })
              .catch((error) => {
                console.error(error);
              });
        } else {
          console.log('error submit!!');
          return false;

        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeargs(item) {
      var index = this.dynamicValidateForm.args.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.args.splice(index, 1)
      }
    },
    addargs() {
      this.dynamicValidateForm.args.push({
        value: '',
        key: Date.now()
      });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },




}
</script>

<style scoped>

</style>
