<template>
<div>
  <button @click="test">
    test
  </button>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "api_test",
  data(){
    return{
      data:{
        "username": "user001",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "clientId": "a88cbe39-75c5-4a57-910c-854d29397a72"
      }
    }
  },
  methods:{
    test(){
      axios.post('/api/v1/gateway/login',this.data,{headers:{
          'Access-Control-Allow-Credentials':'false',
        }}).then((res)=>{
        console.log(res.data)
      })
    }

  }

}

</script>

<style scoped>

</style>
