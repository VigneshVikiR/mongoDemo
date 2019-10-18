const model = require('../model/user');

const storeUserData = async (req, res, next) => {
  try {
    const { body } = req;

    // store data in DB
    await model.storeUserData(body);
    res.status(201).send('User data created successfully');
    return next();
  } catch (e) {
    return next(e);
  }
};

const fetchUserData = async (req, res, next) => {
  try {
    // fetch the user data
    const { params: { id } } = req;

    // search for user data
    const userData = await model.fetchUserData(id);
    if (!userData) {
      throw Error('User not found')
    }
    res.send(userData);
    next();
  } catch (e) {
    next(e);
  }
};


module.exports.storeUserData = storeUserData;
module.exports.fetchUserData = fetchUserData;
