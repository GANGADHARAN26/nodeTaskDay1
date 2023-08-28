//we are going to append  the content tp awewsome.html file
const fs = require('fs');
const nicequote=" => iam added some extra content using addpend file.";
fs.appendFile("./awesome.html",nicequote,(err)=>{
    if (err) throw err;
    console.log('completed writting awesomw.html')
})