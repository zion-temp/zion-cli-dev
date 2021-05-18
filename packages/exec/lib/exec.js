'use strict';
const Command = require("@zion-cli/models")



class IninCommand extends Command{
    init(){
        this.projectName = this._argv[0]||'';
        this.force = this._cmd.opts().force || false;
        console.log(this.projectName,this.force)
    }
    exec(){

    }
}
function init() {
    // const cmdObj = arguments[arguments.length-1];
    return new IninCommand(arguments)
}
module.exports = init;
module.exports.IninCommand = IninCommand;