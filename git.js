const git = require('simple-git');
// console.log(process.cwd())
const GIT_REPOSITORY_ROOT = process.cwd()
simpleGit = git(GIT_REPOSITORY_ROOT );

async  function gitfun (){
    //以下的所有命令都是基于这个repository的路径进行操作了
    
    await simpleGit.status();
    // console.log(status1)
    //等价于 git status
    // await simpleGit.pull('origin', 'master');  
    // 等价于 git pull origin marster (第一个参数是你的remote端名称， 第二个参数是你的分支名称)
    // await simpleGit.checkout('master');
    // 等价于 git checkout master (master 指的是你的分支名称)
    await simpleGit.add('*');
    // console.log(status2)
    // 等价于  git add ./*
    await simpleGit.commit('first commit!');
    // console.log(status3)
    // 等价于 git commit -m 'first commit!'
    await simpleGit.push('origin', 'master');
    // 等价于 git push origin master (origin指的是你的remote端名称， master指的是你的分支名称)
    // await simpleGit.mergeFromTo('from', 'to');
    // 将from分支上的代码合并到to分支上去
    
    console.log('success')
    process.exit(0);//退出子进程
}
gitfun();
