const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack  =require('webpack');
const pathPublic = path.resolve(__dirname,'../build')
const config = {
	entry:path.resolve(__dirname,'../src/main.js'),
	output:{
		path:pathPublic,
		filename:'bundle.[hash].js',
	},
	mode: 'production',
	//检测
	module:{
		rules:[{
			test:/\.(jsx|js)?$/,
			exclude:/node_modules/,
			loader:'babel-loader'
		},{
	        test: /\.css?$/,
	        use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader' ]),
	    },{
	        test:/\.less?$/i,
	        use: ExtractTextPlugin.extract(['css-loader', 'less-loader' ]),
	        exclude:/node_modules/
	    },{
	        test: /\.(png|svg|jpg|gif)$/,
	        loader: 'file-loader'
       	}]
	},

	plugins: [
		//清理build文件夹
		new CleanWebpackPlugin([pathPublic]),
		//css压缩
		new ExtractTextPlugin({filename: 'bundle.[hash].css'}),
  	]
}
module.exports = config;


