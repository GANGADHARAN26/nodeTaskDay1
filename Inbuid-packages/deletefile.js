//we are going to delete the tobeRemove.txt file uding the unlink

const fs = require('fs');

fs.unlink("./tobeRemove.txt",(err)=>{
    console.log("Deleted file successfully")
})