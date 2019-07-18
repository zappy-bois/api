const controller = require('../controllers/Controller1')

module.exports = [
  {
    method: 'get',
    endpoint: '/',
    controller: controller,
  }
]
