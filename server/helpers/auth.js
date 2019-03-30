function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(400).send('Not authenticated');
  }
}

module.exports = {
  isAuthenticated
};
