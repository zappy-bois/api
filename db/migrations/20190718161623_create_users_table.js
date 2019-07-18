
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id')
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .primary();

    table.specificType('iid', 'serial');

    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.string('status');

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
