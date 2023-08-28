const[ , ,n]=process.argv;
const fs=require("fs");
const quote3="Happy day";


for(let i=1;i<=n;i++)
{
    fs.writeFile(`node-${i}.txt`,quote3,(err)=>{
        if(err) throw err;
        console.log(`completed node text: ${i}.txt`);
    })
}