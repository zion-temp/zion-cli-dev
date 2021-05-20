'use strict';
const log = require('../log/index')
const gitInfo = require('../git-npm-info');
const formatPath = require('../format-path')
// const { isObject } = require('lodash');
module.exports = {
    log,
    ...gitInfo,
    isObject,
    formatPath
}
function isObject(o){
    return Object.prototype.toString.call(o)==="[object object]"
}
