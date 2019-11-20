module.exports = {
    publicPath: './',

    devServer: {
        proxy: {
            '/': {
                target: 'http://10.31.163.32:9081',
                ws: true,
                changeOrigin: true
            }
            // '/community': {
            //     target: 'http://10.31.163.32:9081',
            //     ws: true,
            //     changeOrigin: true
            // },
            // '/car': {
            //     target: 'http://10.31.163.32:9081',
            //     ws: true,
            //     changeOrigin: true
            // },
            // '/gate': {
            //     target: ' http://10.31.163.32:9081', //后端接口地址
            //     ws: true,
            //     changeOrigin: true
            // },

            // '/user': {
            //     target: 'http://10.31.163.52:9081',
            //     ws: true,
            //     changeOrigin: true
            // },
            // '/article': {
            //     target: 'http://10.31.163.75:9081',
            //     ws: true,
            //     changeOrigin: true,
            // },
            // '/collect': {
            //     target: 'http://10.31.163.75:9081',
            //     ws: true,
            //     changeOrigin: true,
            // },


            // '/complain': {
            //     target: 'http://10.31.163.30:9081',
            //     ws: true,
            //     changeOrigin: true
            // },
            // '/loginup': {
            //     target: 'http://10.31.151.58:9081',
            //     ws: true,
            //     changeOrigin: true
            // },
            // '/register': {
            //     target: 'http://10.31.151.58:9081',
            //     ws: true,
            //     changeOrigin: true
            // },
            // '/user': {
            //     target: 'http://10.31.151.58:9081',
            //     ws: true,
            //     changeOrigin: true
            // },


            
        }
    }
}
