require('@babel/polyfill');
require('dotenv').config();
require('@babel/register')({presets: ['@babel/preset-env']});

const app = require('./server');

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`)
});
