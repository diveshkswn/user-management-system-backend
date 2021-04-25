/* eslint-disable no-console */
const mongoose = require('mongoose');

const configString = process.env.DATABASE_CONNECTION;
async function connectDB() {
  try {
    await mongoose.connect(configString, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connected to MongoDB successfully ✅');
  } catch (error) {
    console.log('Failed to connect MongoDB');
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
