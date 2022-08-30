<template>
  <div>

    <!--    <h1>api view</h1>-->
    <api_login> </api_login>
    <api_register></api_register>
  </div>



</template>

<script>
import api_login from "@/components/api_login";
import api_register from "@/components/api_register";
export default {
  name: "api",
  components: {api_login,api_register},
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
