const _ = require('lodash');
const getpath = require('./getRouters');
const copy = require('./copy')
const path  = require('path');
const fs = require('fs');
const removeTo = path.resolve(__dirname,'..','build');


function newPlugins (option){

};

newPlugins.prototype.apply = function(compiler){
	//编译完成
	compiler.plugin('done',function () {
		console.log(123);
		const content = getpath();
		content.map(keys=>{
			let newarr = keys.split('/');
			newarr[4]="build";
			let newpath = newarr.join('/');
			read(keys,newpath);
			
		})

		function read(path,newpath){
			fs.readFile(path, 'utf-8', function(err, data) {
		        if (err) {
		            console.log("读取失败");
		        } else {
		        	write(newpath,data);
		        }
		    });

		}

		function write(paths,data){
			fs.writeFile(paths,data,'utf-8',function(err){
				if(err){
					throw err;
				}else{
					console.log('保存成功');
				}
			})

		}
		
	})



	//开始编译
	compiler.plugin('compilation',function () {
		console.log(12);
	})

}

module.exports = newPlugins;