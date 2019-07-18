const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

// APP SETTINGS

app.use(express.json()); // parse application/json
app.use(express.urlencoded({extended: true}));

// CORS settings
const corsSettings = {origin: process.env.CLIENT_URL};
app.use(cors());

routes.forEach(({method, endpoint, controller}) => {
  app[method](endpoint, (req, res) => controller[method](req, res));
})

app.get('/', (req, res) => res.status(200).json('hello world!'));

module.exports = app;
