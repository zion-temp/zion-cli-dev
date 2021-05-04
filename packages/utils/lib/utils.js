'use strict';
const log = require('../log/index')
const gitInfo = require('../git-npm-info')
module.exports = {
    log,
    ...gitInfo,
}
