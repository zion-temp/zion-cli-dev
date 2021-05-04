'use strict';
const log = require('npmlog')
//定制日志
// log.level = "verbose";
log.level = process.env.LOG_LEVEL || 'info'
log.addLevel('success',2000,{fg:'green',bold:true});
log.heading='zion-cli';
log.headingStyle={fg:'white',bg:'red'};


// function logger() {
//     // TODO
//     log.success('cli','测试')
// }
module.exports = log;