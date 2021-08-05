#!/usr/bin/env node

const {execFile,spawn} = require("child_process")
const path =require('path')
const { readFileSync } = require('fs');
const chalk = require("chalk");
const dayjs = require("dayjs");
const ssh2 = require("ssh2")
const compressing = require('compressing');
// const { zip } = require('zip-a-folder');
// console.log(process.cwd())
const fileJson = "zion.package.json"
const jsonPath = path.resolve(process.cwd(),fileJson)
const json = require(jsonPath)

const buildir = path.join(process.cwd(),json.buildFile)
let timestr = dayjs().format("YYYYMMDDHHmm");
const fileNme = buildir + timestr + '.zip';

let conn = new ssh2.Client();

execFileBuild();
//赋值执行当前项目打包命令
function execFileBuild(){
    let build = execFile("npm",['run',json.build],(error, stdout, stderr)=>{
        if(error){
            throw new Error(error);
        }
    })
    build.stdout.on('data',function(data){
        console.log(data.toString())
    })
    build.on("exit", (e) => {
        console.log(chalk.green('<<<<<<<<<<<<<<<<<<<<<<<<打包完成>>>>>>>>>>>>>>>>>>>>'))
        compress();
        // process.exit(e);
    })
}
//文件压缩
async function compress(){

    console.log(chalk.green('开始文件压缩'));
    // await zip(buildir, fileNme);
    await compressing.zip.compressDir(buildir,fileNme)
    console.log(chalk.yellow(`文件压缩成功，已压缩至【${fileNme}`));
    connectServer()

}

// 连接服务器
function connectServer(){
     conn.on("ready", () => {
        console.log(chalk.green('服务器已连接,开始上传压缩包文件'))
        conn.sftp((err, sftp) => {
            let serverPath = json.romotePath + timestr + '.zip'
            sftp.fastPut(fileNme,serverPath, {}, (err, result) => {
                if (err) throw err;
                console.log(chalk.green('文件已上传服务器，开始解压'))
                // 接下来是执行服务器上的命令
                shell(conn)
                // process.exit(0);//退出子进程
            })
        })
    }).connect(json.isPasLoin?json.PasData:{
        host:json.keyDate.host,
        port:json.keyDate.port,
        username:json.keyDate.username,
        privateKey:readFileSync(path.join(process.cwd(),json.keyDate.privateKey))
        // 秘钥登录
    })
}
// 执行服务器命令
function shell(){
    conn.shell(function(err, stream){
        if (err) throw err;
        stream.on('close', function() {
            console.log(chalk.red('关闭服务器'));
            conn.end();
            process.exit(0);//退出子进程
        }).on('data', function(data) {
            console.log(chalk.green('服务器执行命令' + data));
        });
        // 执行的服务器命令
        
        stream.end(`
            cd ${json.romotePath}
            unzip -o ${timestr}.zip
            rm -rf ${timestr}.zip
            ls -la
            exit
        `);

    })
}

function publish() {
    // return json
    console.log(process.cwd())
}
module.exports = {
    publish,
    json
}