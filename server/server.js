import express from 'express';
import graphql from 'express-graphql';
import cors from 'cors';
import routes from './routes/index';
import schemas from './schemas/index';

const app = express();

// APP SETTINGS

app.use(express.json()); // parse application/json
app.use(express.urlencoded({extended: true}));

// CORS settings
// const corsSettings = {origin: process.env.CLIENT_URL};
app.use(cors());

schemas.forEach(({endpoint, schema, root}) => {
  app.use(endpoint, graphql({
    schema,
    rootValue: root,
    graphiql: true,
  }));
});

routes.forEach(({method, endpoint, controller}) => {
  app[method](endpoint, (req, res) => controller[method](req, res));
});

app.get('/', (req, res) => res.status(200).json('hello world!'));

module.exports = app;
