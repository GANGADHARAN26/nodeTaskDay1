//importing
const fs=require("fs");

//declaring quotes
const quote="dream is something does not see in sleep, dream is something that does not let you sleep"


fs.writeFileSync("awesome.html", quote,(err)=>{
    if(err)throw err;
    console.log("completed writing awesome.html")
})







//8888888888888   read file
fs.readFileSync("./awesome.html","utf-8",(err,data)=>{
    if(err) console.log("Error ",err);
    console.log("the content of the file",data)
})

