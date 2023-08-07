const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === "production" ? "/chd102/g6/" : "/",
  css: {
    sourceMap: true
  },
})
