var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // TODO
  // github api post request 
  
});

app.get('/repos', function (req, res) {
  // TODO
  // get data from db
  res.send('Getting data from db');
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

