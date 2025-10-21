const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from my DevOps project 👋');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
