const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      "/api":{
        target:"http://m.jxsjs.com/api/hit-single-list",
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          "/api":""
        }
      }
      
    }
  }
});
