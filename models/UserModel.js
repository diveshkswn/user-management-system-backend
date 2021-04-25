const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
// This is subdocument
const addressSchema = new mongoose.Schema({
  // no need of id in subdocument
  _id: false,
  street: { type: String },
  suite: { type: String },
  city: { type: String, required: [true, 'please provide city in address'] },
  zipcode: { type: String },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide a name.'] },
  username: { type: String, required: [true, 'Please provide a username.'] },
  email: { type: String, required: [true, 'Please provide a email.'] },
  // Adding subdocument in main Schema. We do this for nested documents
  address: { type: addressSchema },
  phone: { type: String, required: [true, 'Please provide a phone.'] },
  website: { type: String, required: [true, 'Please provide a website.'] },
});

// This is important. Need to initialize autoIncrement before using
autoIncrement.initialize(mongoose.connection);

// AutoIncrement of ID which is other than _id
userSchema.plugin(autoIncrement.plugin, {
  model: 'user',
  field: 'id', // Or whatevent name we want to give like "userID"
  startAt: 1,
  incrementBy: 1,
});
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
