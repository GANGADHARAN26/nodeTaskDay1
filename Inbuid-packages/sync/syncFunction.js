const[ , ,n]=process.argv;
const fs=require("fs");
const quote3="Happy day";


for(let i=1;i<=n;i++)
{
    fs.writeFileSync(`node-${i}.txt`,quote3);
        console.log(`completed node text: ${i}.txt`);
    }
