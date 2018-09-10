// const pg = require('pg');
// const Client = pg.Client;
// const databaseUrl = 'postgress://localhost:5432/musicians';
// const client = new Client(databaseUrl);
const client = require('../db-client');

client.query(`
    DROP TABLE IF EXISTS rapper;
    DROP TABLE IF EXISTS musicians;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });