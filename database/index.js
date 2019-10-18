const mongoose = require('mongoose');

module.exports.connect = () =>
  new Promise(resolve => {
    mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true }).catch(error => {
      global.logger.error('Database error', error);
    });
    const db = mongoose.connection;
    db.once('open', () => {
      console.log('Database Connected');
      return resolve();
    });
    db.on('error', error => {
      console.log('Database error', error);
    });
  });
