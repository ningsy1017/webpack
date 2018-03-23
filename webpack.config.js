var path = require("path");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); // 引入 webpack 便于调用其内置插件
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//将你的样式提取到单独的css文件里，不用担心样式会被打包到js文件里

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
		contentBase: path.resolve(__dirname, 'dist/js'),
		compress:true,
		port:9000,
		host:'127.0.0.1',
        hot: true, // 告诉 dev-server 我们在用 HMR
        hotOnly: true, // 指定如果热加载失败了禁止刷新页面 (这是 webpack 的默认行为)，这样便于我们知道失败是因为何种错误
        inline:true,

    },
    entry: {
        print:'./src/js/print.js',
        index:'./src/js/index.js',
        math:'./src/common/math.js',
        // another: './src/js/another-module.js'
    },
    module:{                                                                                                                                                                                                                                                 
      	rules:[
			// {test:/\.css$/,use:['style-loader','css-loader']},
            {test: /\.hbs$/, use: "handlebars" },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new ExtractTextPlugin({
            filename:'css/[name].css'
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Custom-template',
			filename:'assets/index.html',
            template:'index.html',
            chunks:['math','index'],
            date:new Date(),
            minify: {               //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Custom-print',
			filename:'assets/print.html',
            template:'index.html',
            chunks:['math','print'],
            date:new Date(),
            minify: { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        // //提取公共模块
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'common',
        //     minChunks:Infinity,
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname,'./dist'),
		filename: 'js/[name].[hash].js',
		hotUpdateChunkFilename: 'hot/hot-update.js',  //指定热替换补丁js文件和
		hotUpdateMainFilename: 'hot/hot-update.json', //json描述文件生成路径 ，每次文件变化都会生成一次
		// publicPath: '/',
        chunkFilename:'[name].[hash]..js',
    },
};
