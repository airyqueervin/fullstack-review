const Repo = require('../database/RepoSchema.js');
const db = require('../database/index.js');


const getRepos = (req, res) => {
  Repo.find()
  .then(data => {
    console.log('data in the repo controller', data)
    res.send(data);
  })
  .catch(err => {
    console.error('Error retrieving Repo data from db: ', err);
    res.sendStatus(500);
  });
};



module.exports.getRepos = getRepos;