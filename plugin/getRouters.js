const  path=require('path'); 

const fs = require('fs');
const CONTAINERS_PATH = path.join(__dirname,"../date")
function getset(startPath){
	let result=[];
    function finder(paths) {
        let files=fs.readdirSync(paths);
        files.forEach((val,index) => {
            let fPath=path.join(paths,val);
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()){
            	finder(fPath);
            } 
            if(stats.isFile()){
            	result.push(fPath);
            } 
        });
    }
    finder(startPath);
    return result;
}
module.exports = function() {
  const list = getset(CONTAINERS_PATH);
  return list
}
