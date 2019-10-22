import Joi from 'joi';
import Base from './Base';

const STATUSES = ['active', 'inactive'];

export default Base.extend({
  tableName: 'users',
  validate: {
    first_name: Joi.string(),
    last_name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    status: Joi.string().valid(STATUSES),
  },
});
