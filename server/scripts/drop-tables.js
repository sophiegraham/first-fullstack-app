const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgress://localhost:5432/musicians';
cosnt client = new Client(databaseUrl);

client.connect()
    .then(() => {
        return client.query(`
            DROP TABLE IF EXISTS rappers;
        `);
    })
    .then(
        () => console.log('drop tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });
