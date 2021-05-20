'use strict';
const path = require('path');

const userHome = require('user-home');
const Command = require("@zion-cli/models")
const Package = require("@zion-cli/installpackage");


class IninCommand extends Command{
    init(){
        this.projectName = this._argv[0]||'';
        this.force = this._cmd.opts().force || false;


        // console.log(this.projectName,this.force)
    }
    exec(){
        this.downloadTemplate();
    }
    //下载模板
    async downloadTemplate(){
        
        // console.log(userHome)
        //下载包到家目录下面
        const targetPath = path.resolve(userHome, '.zion-cli', 'template');
        const storeDir = path.resolve(userHome, '.zion-cli', 'template', 'node_modules');
        const templateNpm = new Package({
            targetPath,
            storeDir,
            packageName: 'lodash',
            packageVersion: '4.17.21',
        });
        if(!templateNpm.exists()){ //不存在
            try {
                await templateNpm.install()
            } catch (error) {
                throw(error)
            }
        }else { //存在更新
            try {
                await templateNpm.update();
            } catch (error) {
                throw(error)
            }
        }
    }
}
function init() {
    // const cmdObj = arguments[arguments.length-1];
    return new IninCommand(arguments)
}
module.exports = init;
module.exports.IninCommand = IninCommand;