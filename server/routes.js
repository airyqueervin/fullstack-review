const express = require('express');
const router = express.Router();
const routeCtrl = require('./routeController');

router.get('/repos', routeCtrl.getRepos);
// router.post('/repos', routeCtrl.logRepo);

// router.post('/repos/import', routeCtrl.addRepo);

module.exports = router;