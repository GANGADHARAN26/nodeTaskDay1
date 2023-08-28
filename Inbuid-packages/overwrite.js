//we are going to uverwrite the awewsome.html file
const fs = require('fs');
const nicequote="Make everyday a little less ordinarily.";
fs.writeFile("./awesome.html",nicequote,(err)=>{
    if (err) throw err;
    console.log('completed writting awesomw.html')
})