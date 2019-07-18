import controller from '../controllers/Controller2';

export default [
  {
    method: 'get',
    endpoint: '/endpoint2',
    controller,
  },
  {
    method: 'post',
    endpoint: '/endpoint2',
    controller,
  },
];
