var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  name: String,
  repo_url: String

});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;