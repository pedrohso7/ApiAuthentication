const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./app/controllers/index')(app);

app.get('/hello', (req, res) => res.send('Hello World!'));


app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}!`));