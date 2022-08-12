<template>

<div>
  <h1>test
  </h1>
<div>
  <button @click="post_height()">确定</button>
  <h1><input v-model="height" placeholder="4" style="width: 100px;"></h1>

  <div>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
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
  <div>
    <el-upload
        class="upload-demo"
        ref="upload"
        action="http://127.0.0.1:5000/upload_jks"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        drag
        :file-list="fileList"
        :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "test",
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
        name: '',
        trans_id:"",
        chaincode_name:'',
        chaincode_ver:"",
        func_name:'',
      },
      fileList:[],
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
            if (res.data=='error'){
              alert('参数类型错误，请重新提交')
            }else
            {
              alert('提交成功')
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
