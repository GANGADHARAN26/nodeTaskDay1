//importing file 
const fs = require('fs');
//importing path module
const path = require('path');
//importing express 
const express=require('express');
const app = express();
const PORT=5000;
// getting the current date and time
const now = new Date();
const formattedDate = now.toISOString().replace(/:/g, '-');
const filename = `${formattedDate}.txt`;
console.log("filefornate",formattedDate);
//content to be written to the file
const fileContent = now.toString();

// Defining the file path by joining the directory path and the filename
const filePath = path.join(__dirname, filename);

//api endpoint
app.get('/createFile',(req,res)=>{
  // Write the content to the file
fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error while creating file:', err);
  } else {
    console.log('File created successfully:', filePath);
  res.status(200).send(fileContent);
  }
});
})
app.listen(PORT, ()=>{
  console.log(`server is running on port no ${PORT}`);
})
// console.log("fileoatb",_File)