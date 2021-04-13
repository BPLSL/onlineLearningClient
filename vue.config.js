module.exports = {
    lintOnSave: false,
    devServer: {
    	// 项目启动端口之后会变成3000
        port: 8081,
        proxy: {
            '/api': {
              target: 'http://127.0.0.1:8080',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
            },
            '/abc': {
                target: 'https://www.baidu.com',
                ws: true,
                changOrigin: true, 
                pathRewrite: {
                    '^/abc': '' 
                }
            }
          }
    },
    // settings: {
    //     "vetur.useWorkspaceDependencies": true,
    //     "vetur.experimental.templateInterpolationService": true
    // }
}