const path = require('path');
const {execSync} = require('child_process');
const fs = require('fs');

console.log('=============开始打包=============');

// 删除lib
const libPath = path.resolve(__dirname, '../lib');
if (fs.existsSync(libPath)) {
  deleteFolder(libPath);
  console.log('清空lib');
}

console.log('开始webpack打包');

// wbepack打包
const webpack = path.resolve(__dirname, '../config/production.js');
execSync(`webpack --config ${webpack}`);
console.log('webpack打包完成');

console.log('开始gulp打包');
// gulp打包
const gulp = path.resolve(__dirname, './gulpLess.js');
execSync(`gulp --gulpfile ${gulp}`);
console.log('gulp打包完成');

console.log('=============打包结束=============');

// 删除文件夹及其后代
function deleteFolder(path) {
  var files = [];
  if( fs.existsSync(path) ) {
    files = fs.readdirSync(path);
    files.forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}



