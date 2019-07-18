import bookshelf from 'bookshelf';
import knex from 'knex';
import config from './knexfile';

export default bookshelf(knex(config))
  .plugin('virtuals')
  .plugin('pagination');
