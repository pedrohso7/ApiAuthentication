const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./app/controllers/index')(app);

app.get('/hello', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));