const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vue-target-game/',
  outputDir: 'docs',
  filenameHashing: false,
  assetsDir: 'assets'
})
