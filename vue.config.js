const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // options...
  devServer: {
    proxy: {
      '/api':{
        target:'http://chain.repchain.net.cn/uct',
        changeOrigin: true,
      }
    },
  }
}
