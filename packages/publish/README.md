# `@zion-cli/publish`

全局下载 就会有zion-publish 命令
```
npm install -g @zion-cli/publish
```

###使用
```
npm install  @zion-cli/publish -D
```

在项目跟目录新建zion.package.json文件如下

```json
{
    "build":"build",
    "buildFile":"/dist",
    "romotePath":"/data/",
    "isPasLoin":"true",
    "PasData":{
        "host":"122.51.157.102",
        "port":"xxx",
        "username":"root",
        "password":"xxxxxx"
    },
    "keyDate":{
        "host":"122.51.157.102",
        "port":"22",
        "username":"xxxx",
        "privateKey":"./key"
    },
    "shell":""
}
```
+ build  项目打包要执行的命令
+ buildFile  项目打包之后的文件夹路径
+ romotePath 上传文件服务器的存放路径
+ isPasLoin 是否是密码登录，false 秘钥登录
+ PasData 密码登录的数据
    + host 服务器地址
    + port 服务器端口号
    + username 服务器用户名
    + password 服务器登录密码
+ keyDate 秘钥登录需要的数据
    + host 服务器地址
    + port 服务器端口号
    + username 服务器用户名 
    + privateKey key 文件的路径
+ shell 在服务里面要执行的shell 命令 格式 `ls -la\n exit`