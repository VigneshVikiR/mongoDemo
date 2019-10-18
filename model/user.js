const User = require('../database/user');

const fetchUserData = _id => {
  return User.findOne({
    _id,
  })
};

const storeUserData = body => {
  return User.create(body)
};


module.exports.fetchUserData = fetchUserData;
module.exports.storeUserData = storeUserData;
