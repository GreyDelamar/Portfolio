
exports.up = function(knex, Promise) {
  return knex.schema.createTable('job', function(table) {
     table.increments();
     table.string('firstname');
     table.string('lastname');
     table.string('company');
     table.string('email');
     table.text('message')
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('job');
};
