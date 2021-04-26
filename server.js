/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const colors = require('colors');
const express = require('express');
const connectDB = require('./db/dbConnect');

const app = express();

// Connect to MongoDB Databse
connectDB();

// middleware
app.use(express.json());

// CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://bootcamps-by-divesh.netlify.app'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   next();
// });

// Router
app.use('/api/v1/users/', require('./routes/UserManagementRoutes'));

app.get('/', (req, res) => res.send('Hello India'));

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Express server started on port ${String(PORT).red}`);
});
