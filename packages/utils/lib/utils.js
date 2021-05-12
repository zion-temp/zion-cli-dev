'use strict';
const log = require('../log/index')
const gitInfo = require('../git-npm-info');
// const { isObject } = require('lodash');
module.exports = {
    log,
    ...gitInfo,
    isObject
}
function isObject(o){
    return Object.prototype.toString.call(o)==="[object object]"
}
