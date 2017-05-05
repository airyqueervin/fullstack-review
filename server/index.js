const express = require('express');
const router = require('./routes.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use('/api', router);

// app.post('/repos/import', (req, res) => {
//   // TODO
//   // github api post request 
  
// });

app.get('/repos', (req, res) => {
  // TODO
  // get data from db
  res.send('Db is up and running');
});

const port = process.env.port || 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

