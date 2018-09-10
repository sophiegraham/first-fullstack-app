// const pg = require('pg');
// const Client = pg.Client;
// const databaseUrl = 'postgres://localhost:5432/musicians';
// const client = new Client(databaseUrl);
const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS musicians (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
    );

    CREATE TABLE IF NOT EXISTS neighborhoods (
      CREATE TABLE IF NOT EXISTS rappers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        city VARCHAR(256) NOT NULL,
        yob INTEGER NOT NULL,
        albums INTEGER NOT NULL
      );
    `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });