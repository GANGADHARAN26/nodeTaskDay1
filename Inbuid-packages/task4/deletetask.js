//task => delete all the files in backup folder
const fs = require('fs');

fs.readdir("./backup",(err, files) => {
 files.forEach((fileName) => {
    fs.unlink(`./backup/${fileName}`, (err)=>{
        console.log("Delete successful",fileName);
    })
 })
})