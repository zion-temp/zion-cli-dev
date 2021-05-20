const axios = require('axios')

const urlJoin = require("url-join")
const semver = require('semver')



module.exports = {
    getnpmVersion,
    getsemverVersion,
    getnpminfo,
    getDefaultRegistry,
    getNpmLatestVersion
}
function getsemverVersion(baseVersion,versions){
    versions.filter(ver=>{
        return semver.satisfies(ver,`^${baseVersion}`)
    }).sort((a,b)=>{
        return semver.gt(b,a);
    })
    return versions;
}
async function getnpmVersion(namePack,registry){
    let data = await getnpminfo(namePack,registry)
    if(data){
        return Object.keys(data.versions);
    }else {
        return []
    }
}

function getnpminfo(namePack,registry){
    if(!namePack){
        return;
    }
    let url = registry || getDefaultRegistry();
    let npmURL = urlJoin(url,namePack)


    return axios.get(npmURL).then(res=>{
        if(res.status ===200){
            return res.data;
        }else {
            return null
        }
    })
    
}
function getDefaultRegistry(isOriginal = false){
    return isOriginal?'https://registry.npm.org':'https://registry.npm.taobao.org'
}
//获取最新版本
async function getNpmLatestVersion(npmName, registry) {
    let versions = await getnpmVersion(npmName, registry);
    if (versions) {
      return versions.sort((a, b) => semver.gt(b, a))[0];
    }
    return null;
  }

