const path = require('path');
const config = {
	entry:path.resolve(__dirname,'./app/main.js'),
	output:{
		path:path.resolve(__dirname,'./build'),
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
	}
}
module.exports = config;
