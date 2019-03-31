module.exports = {
    publicPath:'./',
    devServer:{
        port:8000,
        open:true,
        // 服务器代理
        // proxy:{
        //     '/api':{
        //         target:'http://47.100.222.26:80',
        //         changeOrigin:true,
        //         ws:true,
        //     },
        //     '/douban':{// axios 访问 /douban == target + '/douban'
        //         target:'https://api.douban.com',
        //         changeOrigin:true,
        //         pathRewrite:{//路径替换
        //         '^/douban':'',// axios 访问/douban/v2 == target + /v2
        //         }
        //     }
        // }
    }
    
}