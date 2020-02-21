const px2rem = require('postcss-px2rem');
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75   // 设计稿10等分之后的值
});

module.exports = {
    runtimeCompiler: true,

    // 关闭enlint语法检查
    lintOnSave: false,
  
    // 不生成 source map文件
    productionSourceMap: false,
    css: { // 添加postcss配置
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
      },
    
    devServer: {
        open: true,//默认自动打开浏览器
        proxy: {
          '/api': { //匹配/api开头的请求
            target: 'http://localhost:8087',
            changeOrigin: true, //默认false，是否需要改变原始主机头为目标URL
            pathRewrite: {
              "^/api": ''
            }
          },
          '/myou': {
            target: 'https://m.you.163.com',
            changeOrigin: true,
            pathRewrite: {
              "^/myou": ''
            }
          },
        }
    }
};