const base=require('./webpack.config.base')
const {merge}=require('webpack-merge')
const webpack=require('webpack')

module.exports=merge(base,{
    devServer:{
        port:8080,
        host:'127.0.0.1',
        open:true,
        hot:true,
        overlay:{erros:true}
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
                ],
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})
