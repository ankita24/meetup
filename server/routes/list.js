const { Router } = require('express');
const { isAuthenticated } = require('../helpers/auth');

const router = Router();

router.get('/', isAuthenticated, function(req, res) {
  res.send({ list: [] });
});

module.exports = router;
