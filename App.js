const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(201).send('welcome');
});

app.use('/login', router);

app.listen(PORT, () => {
  console.log('welcome to server');
});
