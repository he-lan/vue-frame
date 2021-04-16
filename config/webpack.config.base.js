//这里用来配置开发和生产中的公共的webpack配置
const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    //输入
    entry: path.join(__dirname, '../src/index.js'),
    //输出
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'bundle.js'
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js' //配置别名 确保webpack可以找到.vue文件
        },
        extensions:['.js','.jsx','.json']
    },
    mode:process.env.NODE_ENV,
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: ['thread-loader', 'vue-loader'],
            },
            {
                test: /\.js$/,
                use: ['thread-loader', 'babel-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 10000,
                    name: 'static/assets/images/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/assets/media/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/assets/fonts/[name].[hash:7].[ext]',
                },
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../index.html'),
            title: 'vue项目框架',
            inject:'body',
            favicon:'',//项目图标
            minify:{
                removeComments:true
            }
        })
    ]
}
