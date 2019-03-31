const axios = require('axios');
const { Router } = require('express');
const { isAuthenticated } = require('../helpers/auth');
const config = require('../config/config.json');

const router = Router();

router.get('/', isAuthenticated, function(req, res) {
  axios
    .get(`${config.MEETUP_BASE_PATH}/find/groups`, {
      params: { key: config.MEETUP_API_KEY, ...req.query }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.get('/:urlname', isAuthenticated, function(req, res) {
  axios
    .get(`${config.MEETUP_BASE_PATH}/${req.params.urlname}`, {
      params: { key: config.MEETUP_API_KEY, ...req.query }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});
module.exports = router;
