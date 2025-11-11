const express = require('express');
const fs=require('fs')
const app = express();


const dateFilePath=path.join(__dirname,'data','data.txt')

app.get('/api', (req, res) => {
  res.send('Hello from my DevOps project 👋');

  try{
    if (fs.existsSync(dateFilePath)) {
      message=fs.readFileSync(dateFilePath,'utf8')
    }
  }
  catch(err){
    res.send('File does not exist!!')
  
  }

    res.send(`<h2>📦 Message from Docker Volume:</h2><p>${message}</p>`);

});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});


console.log('test')
