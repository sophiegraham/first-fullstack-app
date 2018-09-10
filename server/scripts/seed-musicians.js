const client = require('../db-client');
// okay to import "json", you will get JavaScript objects :)
const musicians = require('./musicians.json');

Promise.all(
  musicians.map(musician => {
    return client.query(`
        INSERT INTO musicians (name)
        VALUES ($1);
    `,
    [musician.name]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());