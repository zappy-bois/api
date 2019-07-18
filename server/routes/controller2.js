const controller = require('../Controller2')

module.exports = [
  {
    method: 'get',
    endpoint: '/controller2',
    controller: controller,
  },
  {
    method: 'post',
    endpoint: '/controller2'
    controller: controller,
  }
]
