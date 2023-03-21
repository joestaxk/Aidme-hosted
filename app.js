const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// const mongoConnect = require('./utils/database').mongoConnect;


app.use(bodyParser.json());
app.use('/api/users', userRoutes);


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

