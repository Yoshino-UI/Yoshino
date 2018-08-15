const path = require('path');
const {execSync} = require('child_process');
const fs = require('fs');

console.log('=============开始打包=============');

// 删除lib es6
const libPath = path.resolve(__dirname, '../lib');
const es6Path = path.resolve(__dirname, '../lib');

if (fs.existsSync(libPath)) {
  deleteFolder(libPath);
  console.log('清空lib');
}

if (fs.existsSync(es6Path)) {
  deleteFolder(es6Path);
  console.log('清空es6');
}

// 更新index.tsx
const updateEntry = path.resolve(__dirname, './updateEntry.js');
console.log('开始更新组件库入口文件');
execSync(`node ${updateEntry}`);
console.log('完成更新组件库入口文件');

console.log('开始tsc编译');
// tsc编译
const tsc = path.resolve(__dirname, '../node_modules', '.bin', 'tsc');
execSync(`${tsc} --outDir lib/ --declaration -p components/`);
execSync(`${tsc} --outDir es6/ --module es6 --declaration -p components/`);
execSync(`${tsc} --outDir lib/ --allowJs -p components/`);
execSync(`${tsc} --outDir es6/ --module es6 --allowJs -p components/`);

console.log('结束tsc编译');

console.log('开始gulp打包');
// gulp打包
const gulpEntry = path.resolve(__dirname, './gulpLess.js');
const gulp = path.resolve(__dirname, '../node_modules', '.bin', 'gulp');

execSync(`${gulp} --gulpfile ${gulpEntry}`);
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



