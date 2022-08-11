<template>
  <div>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div style="position: center;padding: 50px">
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"><test></test></div></el-col>
        </el-row>

    </div>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import test from "@/components/test";
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    test
  },
  data(){
    return {


    }
  },
  methods:{
    test(){

    }
  }

}
</script>
<style>
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
