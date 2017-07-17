const path = require('path');
const config = {
	entry:path.resolve(__dirname,'./app/main.js'),
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
		}

		]
	},
	devServer:{
		contentBase: path.resolve(__dirname, "build"),//跟目录
		port:7000,//端口
		stats: "errors-only",//不重要的不要打出来
	    historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
	}
}
module.exports = config;
