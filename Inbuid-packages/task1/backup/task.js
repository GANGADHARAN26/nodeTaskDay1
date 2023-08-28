const fs=require("fs");
const quote2="live more ,worry less";

for(let i=0;i<10;i++)
{
    fs.writeFile(`text_${i+1}`,quote2,(err)=>{
        if(err) throw err;
        console.log("done the task.html");
    })
}