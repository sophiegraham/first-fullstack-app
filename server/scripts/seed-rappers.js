const client = require('../db-client');
// okay to import "json", you will get JavaScript objects :)
const rappers = require('./rappers.json');

Promise.all(
  rappers.map(rap => {
    return client.query(`
      INSERT into rappers (
        musician_id, name, city, yob, albums
      ) 
      SELECT
        id as musician_id,
        $1 as name,
        $2 as city,
        $3 as yob,
        $4 as albums
      FROM musicians
    `,
    [rap.name, rap.city, rap.yob, rap.albums]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());