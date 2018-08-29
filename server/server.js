const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const fs = require('fs');
const dataPath = 'data/structures.json';

function readData() {

  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);

  return data;
}

app.get('/api/structures', (req, res) => {
  const data = readData();

  res.send(data);
});

app.post('/api/structures', (req, res) => {
  const data = readData();
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));

  res.send(req.body);
});

const PORT = 3000;
app.listen(PORT, () => console.log('app running...'));