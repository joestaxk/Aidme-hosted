const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const mongoose = require('mongoose');
const { toFormData } = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// const mongoConnect = require('./utils/database').mongoConnect;
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 
  'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 
  'Content-Type, Authorization');
  next();
})


app.use('/api/users', userRoutes);
app.post('/api', dashboardRoutes);


app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({message: message, data: data});
})


mongoose
  .connect('mongodb+srv://Aidme:WaE1EO9dN4QlHCEP@aidme.crnapwb.mongodb.net/?retryWrites=true&w=majority')
  .then(result => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);

  });

