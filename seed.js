const db = require('./database/index.js');
const data = require('data.json');
// const repo = require('')

db.remove({}).then(() => {
  let i = 0;
  data.forEach(repo => {
    db.create(repo)
    .then(() => {
      console.log(`Successfully seeded ${repo.name} into the database`, repo);
    })
    .then(() => {
      i++
      if (i === data.length) {
        process.exit();
      }
    })
    .catch(err => {
      console.error(err);
    })
  });
}) ;