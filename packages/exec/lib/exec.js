'use strict';
const modle = require("@zion-cli/models")
module.exports = exec;
const SETTING ={
    init:'@zion-cli/init',
}
function exec() {
    // console.log(process.env.CLI_TARGET_PATH);
    // console.log(process.env.Cli_HOME_PATH);
    const cmdObj = arguments[arguments.length-1];
    const proName = arguments[0]
    // console.log(cmdObj.opts())
    console.log(proName)
    // console.log(arguments)
    // console.log(cmdObj)
    const packageName = SETTING[cmdObj.name()]
    const packageversion = "latest"
    let pkg = new modle({
        targetPath:process.env.CLI_TARGET_PATH,
        storePath:process.env.Cli_HOME_PATH,
        name:packageName,
        version:packageversion
    })
}
