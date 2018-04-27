const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
	entry:path.resolve(__dirname,'../src/main.js'),
	output:{
		path:path.resolve(__dirname,'../build'),
		filename:'bundle.js'
	},
	mode: 'development',
	//检测
	devtool: 'inline-source-map',
	module:{
		rules:[
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
		},{
	        test: /\.(png|svg|jpg|gif)$/,
	        loader: 'file-loader'
       	}

		]
	},

	plugins: [
		//清理build文件夹
		new CleanWebpackPlugin(['build']),
		//生成html
		new HtmlWebpackPlugin({
			title: 'webpack',
			filename:'index.html',
			template:'./template/index.ejs'
		}),

  	],
	devServer:{
        proxy: { //代理 /api/user  变成 http://localhost:3000/api/user
		  "/comments": "http://localhost:3000"
		}
	}
}
module.exports = config;


