//importing the os package
const os=require("os");

//1kb => 1024 bytes => 1mb => 1024 kb =>1gb =>1024mb

//free memory
console.log("free memory", os.freemem()/1024/1024/1024);
//total memory usage
console.log("total memory", os.totalmem()/1024/1024/1024);
//os versioin
console.log("os_version", os.version());
//cpu usage
console.log("cpu_usage", os.cpus());
//platform usage
console.log("platform", os.platform());
//architecture usage
console.log("architecture", os.arch())
//user information
console.log("user information", os.userInfo());