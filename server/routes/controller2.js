const controller = require('../controllers/Controller2')

module.exports = [
  {
    method: 'get',
    endpoint: '/endpoint2',
    controller: controller,
  },
  {
    method: 'post',
    endpoint: '/endpoint2',
    controller: controller,
  }
]
