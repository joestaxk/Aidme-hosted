const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

const mongoConnect = require('./utils/database').mongoConnect;


app.use(bodyParser.json());
app.use('/api/users', userRoutes);


mongoConnect(() => {
 // console.log(client);
  app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  });
});
