const path  =require('path');
const fs = require('fs');
const  WebpackDevServer  = require('webpack-dev-server');
const webpack  = require('webpack');
const config = require("./webpack.config.js");
const getpath = require('./plugin/getRouters.js');
let compiler = webpack(config);
let server = new WebpackDevServer(compiler, {
	contentBase: path.resolve(__dirname, "build"),//跟目录
		// // port:7000,//端口
    stats: "errors-only",//不重要的不要打出来
    historyApiFallback: true,  //不跳转
    inline: true,  //实时刷新
});


let  paths = getpath();
for(var i =0;i<paths.length;i++){
	let newlist =paths[i].substring(paths[i].indexOf('date')+4);
	let lists  = newlist.substr(0,newlist.indexOf('.'));
	server.app.post(lists, function(req, res) {
		for(var j=0;j<paths.length;j++){
			if(paths[j].indexOf(lists)>0){
				var  newPath = paths[j];
			}
		}
		fs.readFile(newPath, 'utf-8', function(err, data) {
	        if (err) {
	            console.log("读取失败");
	        } else {
	        	res.end(data);
	        }
	    });
    });
}

server.app.listen(7000);
