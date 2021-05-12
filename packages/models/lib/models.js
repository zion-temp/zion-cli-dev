'use strict';
const {isObject,log} = require("@zion-cli/utils")
class Package {
    constructor(options){
        console.log('Package constructor')
        //包路径
        this.targetPath = options.targetPath;
        //存储路径
        this.storePath = options.storePath;
        //包name
        this.packageName = options.name;
        //包版本
        this.packageVersion = options.version;
    }
    //判断当前pkg是否纯在
    // exists(){}
    // //安装pkg
    // install(){}
    // //更新pkg
    // update(){}
    // //获取入口文件路径
    // getRootFilePath()
}

module.exports = Package;