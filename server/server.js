const express = require('express');
const app = express();
app.get('/rappers', (req, res) => {
  res.send('hello rappers');
});
const PORT = 3000;
app.listen(PORT, () => console.log('app running...'));