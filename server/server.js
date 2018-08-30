const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/musicians';
const client = new Client(databaseUrl);
client.connect();

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
  console.log('posting');
  const body = req.body;
  const data = readData();
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));

  client.query(`
    INSERT INTO rappers (name, city, dob, albums)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.name, body.city, body.dob, body.albums]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));

  res.send(req.body);
});

app.listen(3000, () => console.log('app running...'));