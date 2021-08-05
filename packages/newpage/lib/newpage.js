'use strict';
const Command = require("@zion-cli/models")
const {log} = require("@zion-cli/utils")
const inquirer = require('inquirer');
class pageCommand extends Command{
    init(){
        // 初始化数据
        this.pageName = this._argv[0]||'';
        
    }
    async exec(){
        try {
            //1准备模板信息
            let projectInfo =await this.prepare();
            // console.log(projectInfo);
            log.verbose('项目配置信息',projectInfo);
            
        } catch (error) {
            log.verbose('出错了',error)
        }
    }
    async prepare(){
        let project={}
        let inputInfo = [
            {
                name: 'pageName',
                type: 'input',
                message: '请输入页面名称',
                default: 'page1',
            }
        ]
        if(!this.pageName){
            project= await inquirer.prompt(inputInfo)
            if(!project.pageName){
                project.pageName = this.pageName
            }
        }else {
            project.pageName = this.pageName
        }
        
        return project;
    }
}

function createPage() {
    // TODO
    // console.log('newpage',pagename)

    return new pageCommand(arguments)

}

module.exports = createPage;
// module.exports.IninCommand = IninCommand;
