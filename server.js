const express = require('express');

const route = require('./Routes/contact');
const dbConnect = require('./config/dbConnect');

const app = express();
app.use(express.json());
dbConnect();
app.use('/', route);
const PORT = process.env.PORT || 5000;
app.listen(PORT, err =>
  err ? console.error(err) : console.log(`server is running on ${PORT}`)
);
