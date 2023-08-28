//we are going to read the whole file 

const fs = require('fs');

fs.readdir("./task",(err, files)=>{
    console.log("All file name are",files);
});