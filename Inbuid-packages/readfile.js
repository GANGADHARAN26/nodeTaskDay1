const fs=require("fs");

//read the file

fs.readFile("./awesome.html542","utf-8",(err,data)=>{
    if(err) console.log("Error",err);
    console.log("the content of the file ", data);
})