const controller1 = require('../controllers/Controller1');
const controller2 = require('../controllers/Controller2');

console.log(controllers);

module.exports = [
  ...controller1,
  ...controller2,
]
