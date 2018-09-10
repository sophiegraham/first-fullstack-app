// basic express app
const express = require('express');
const app = express();

// logging
const morgan = require('morgan');
app.use(morgan('dev'));

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const client = require('./db-client');

// routes
app.get('/api/rappers', (req, res) => {
  client.query(`
    SELECT 
      n.id,
      n.name, 
      q.id as "musicianId",
      q.name as musician
    FROM rappers as r
    JOIN musicians as m
    ON r.musician_id = m.id
    ORDER BY m.name;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/rappers/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      name, 
      musician_id as "musicianId",
      city,
      yob,
      albums
    FROM rappers
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
  
});

app.post('/api/rapper', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO rappers (name, musician_id, city, yob, albums)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.quadrantId, body.city, body.yob, body.albums]
  )
    .then(result => {
      // we always get rows back, in this case we just want first one.
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.put('/api/rappers/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update rappers
    set
      name = $1,
      quadrant_id = $2,
      city = $3,
      yob = $4,
      albums = $5
    where id = $6
    returning *;
  `,
  [body.name, body.quadrantId, body.city, body.yob, body.albums, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/rappers/:id', (req, res) => {
  client.query(`
    delete from neighborhoods where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/musicians', (req, res) => {
  client.query(`
    SELECT *
    FROM musicians;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

// start "listening" (run) the app (server)
const PORT = 3000;
app.listen(3000, () => console.log('app running on', PORT));