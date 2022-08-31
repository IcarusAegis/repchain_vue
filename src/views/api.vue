<template>
  <div>

    <!--    <h1>api view</h1>-->
    <api_login> </api_login>
    <api_register></api_register>
    <api_jks_download></api_jks_download>
    <api_oper_chain></api_oper_chain>
  </div>



</template>

<script>
import api_login from "@/components/api_login";
import api_register from "@/components/api_register";
import api_jks_download from "@/components/api_jks_download";
import api_oper_chain from "@/components/api_oper_chain";
export default {
  name: "api",
  components: {api_login,api_register,api_jks_download,api_oper_chain},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
