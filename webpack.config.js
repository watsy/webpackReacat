const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const  HtmlWebpackPlugin= require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const config = {
	entry:path.resolve(__dirname,'./src/main.js'),
	output:{
		path:path.resolve(__dirname,'./build'),
		publicPath: "/assets/",
		filename:'bundle.js'
	},
	module:{
		loaders:[
		{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel-loader'
		},{
			test:/\.less?$/,
			loader:'style-loader!css-loader!less-loader'
		},{
			test:/\.css?$/,
			loader:'style-loader!css-loader'
		},{ //小于8k的png或者jpg变成64为二解码
			test: /\.(png|jpg)$/, 
			loader: 'url-loader?limit=8192'
		},
		{ //小于8k的png或者jpg变成64为二解码
			test: /\.json$/, 
			loader: 'json-loader'
		},

		]
	},
	plugins: [
	 //    new newplugins(),
  //   	new CopyWebpackPlugin([
		// 	{
  //               from: __dirname +'/date',
  //               to:__dirname+'/mock'
			    
		// 	}
		// ])
		//清理build文件夹
		// new CleanWebpackPlugin(['build']),

		//对js进行压缩
		// new webpack.optimize.UglifyJsPlugin({
	 //      sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
	 //    }),

		//生成html
		// new HtmlWebpackPlugin({
		// 	title: 'My webpack',
		// 	filename:'index.html',
		// 	template:'./template/index.ejs'
		// }),

  	],
	devServer:{
		// contentBase: path.resolve(__dirname, "build"),//跟目录
		// // // port:7000,//端口
	 //    stats: "errors-only",//不重要的不要打出来
	 //    historyApiFallback: true,  //不跳转
  //       inline: true,  //实时刷新
        proxy: { //代理 /api/user  变成 http://localhost:3000/api/user
		  "/comments": "http://localhost:3000"
		}
	}
}
module.exports = config;
