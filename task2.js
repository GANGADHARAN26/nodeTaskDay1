const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // You can change this to your desired port

// Define the API endpoint to retrieve file list
app.get('/getFileList', (req, res) => {
  const filesFolder = path.join(__dirname, 'File');

  fs.readdir(filesFolder, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).send('Error reading directory');
    }

    // Filter files to include only text files
    const textFiles = files.filter(file => file.endsWith('.txt'));

    res.status(200).json(textFiles);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});