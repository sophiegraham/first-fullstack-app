
// const URL = 'http://localhost:3000/api';
// const MUSICIANS_URL = `${URL}/musicians`;
// const ALBUMS_URL = `${URL}/albums`;

export default {

    getRappers() {
      return fetch('http://localhost:3000/api/rappers', {
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json());
    },
    addRapper(rapper) {
      return fetch('http://localhost:3000/api/rappers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rapper)
      })
        .then(response => response.json());
    }
  };
//   update to have JSON.stringify for each action (get, add, update, etc)