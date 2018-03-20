var path = require("path");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); // 引入 webpack 便于调用其内置插件
var  UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// console.log(CleanWebpackPlugin);

module.exports = {
    // devtool: 'inline-source-map',
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
    },
    module:{
      	rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{ test: /\.hbs$/, loader: "handlebars" }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Custom-template',
			filename:'assets/index.html',
            template:'index.html',
            date:new Date()
          
      }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname,'./dist'),
		filename: 'js/[name].bundle.js',
		hotUpdateChunkFilename: 'hot/hot-update.js',  //指定热替换补丁js文件和
		hotUpdateMainFilename: 'hot/hot-update.json', //json描述文件生成路径 ，每次文件变化都会生成一次
		// publicPath: 'localhost:3000/dist',
        chunkFilename:'[name].bundle.js',
    },
};
