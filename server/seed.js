const db = require('../database/index.js');
const Repo = require('../database/RepoSchema');
const data = require('../data.json');

Repo.remove({}).then(() => {
  let i = 0;
  data.forEach(repo => {
    Repo.create(repo)
    .then(() => {
      console.log(`Successfully seeded ${repo.name} into the database`, repo.owner.repos_url);
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