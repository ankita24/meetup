const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://ankita:Riya@db1-ituqd.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true, useCreateIndex: true }
);

function setupDB() {
  var db = mongoose.connection;
  db.on('error', function(error) {
    console.log('Connection error', error);
  });
  db.once('open', function() {
    console.log('connected');
  });
  return db;
}

module.exports = setupDB;
