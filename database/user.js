const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const UserSchema = new Schema({
  id: {
    type: ObjectId,
  },
  name: {
    type: String,
  },
  emailId: {
    type: String,
    index: true,
    required: true
  },
  mobNo: {
    type: Number,
    required: false
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
