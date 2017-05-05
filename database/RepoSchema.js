const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoSchema = new Schema({
  name: String,
  repo_url: String
});

const Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;