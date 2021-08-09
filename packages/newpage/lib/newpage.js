'use strict';
const Command = require("@zion-cli/models")
const {log} = require("@zion-cli/utils")
const fse = require('fs-extra')// 文件操作的库
const fs = require('fs')
const inquirer = require('inquirer');
const path =require('path')
const fileJson = "zion.package.json"
const jsonPath = path.resolve(process.cwd(),fileJson)
// fs.exists(jsonPath, (exists) => {
//     console.log(exists );
//     if(!exists){
//         throw(new Error(jsonPath + '文件不存在'))
//         return
//     }
// });
const json = require(jsonPath)


class pageCommand extends Command{
    init(){
        // 初始化数据
        this.pageName = this._argv[0]||'';
        
    }
    async exec(){
        try {
            //1准备模板信息
            let projectInfo =await this.prepare();
           
            this.capyPage(projectInfo,json)
            // log.verbose('项目配置信息',projectInfo);
            
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
    async capyPage(projectInfo,json){
        const {pageName} = projectInfo;
        const { pageTemp, pagePath } = json;
        const loaclpath = process.cwd()
        // console.log(pageName,pageTemp,pagePath)
        // 判断文件是否存在
        var path = loaclpath + pagePath + pageName
        // console.log(path)
        fse.mkdirpSync(path); //确保路径存在不存在创建
        fse.ensureDirSync(path);

        // 拷贝文件
        fse.copySync(loaclpath + pageTemp, path); //拷贝模板

    }


}

function createPage() {
    // TODO
    // console.log('newpage',pagename)

    return new pageCommand(arguments)

}

module.exports = createPage;
// module.exports.IninCommand = IninCommand;
