const path=require('path')
const base=require('./webpack.config.base')
const {merge}=require('webpack-merge')
const webpack=require('webpack')


module.exports=merge(base,{
    devServer:{
        port:8080,
        host:'127.0.0.1',
        open:true,
        hot:true,
        overlay:{erros:true},
        proxy: {
            '/managercenter': {
                target: `http://192.168.1.96:9999/`,
                changeOrigin: true,
            },
        },
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'sass-resources-loader',
                        options:{
                            resources:path.resolve(__dirname,'../src/assets/style/variables.scss'),
                        }
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: path.resolve(__dirname,'../src/assets/style/testLess.less'),
                            injector: 'append',
                        },
                    },
                ],
            },

        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})
