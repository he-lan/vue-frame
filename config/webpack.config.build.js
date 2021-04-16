const base=require('./webpack.config.base')
const {merge}=require('webpack-merge')
const MiniCssExtractPlugin =require('mini-css-extract-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')

module.exports=merge(base,{
    output:{
        filename:'js/[name][hash].js',
        chunkFilename:'js/vendor[id][hash].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                },
                vendor:{
                    test: /node_modules/,
                    name: 'vendor',
                    chunks:'all'
                }
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [postcssPresetEnv(/* pluginOptions */)],
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'style-resources-loader',
                        options:{
                                patterns:path.resolve(__dirname,'../src/assets/style/variables.scss'),
                                injector:'append',
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
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname,'../src/assets/style/testLess.less'),
                            injector: 'append',
                        },
                    },
                ],
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename:'css/[hash].css'}),
        new CleanWebpackPlugin()
    ]
})
