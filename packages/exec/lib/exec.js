'use strict';
const modle = require("@zion-cli/models")
module.exports = exec;

function exec() {
    let pkg = new modle()
    console.log(pkg);
    // console.log('exec')
    console.log(process.env.CLI_TARGET_PATH)
    console.log(process.env.Cli_HOME_PATH)
    // TODO
}
