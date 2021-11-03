const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
