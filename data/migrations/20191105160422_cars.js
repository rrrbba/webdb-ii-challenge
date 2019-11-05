
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table) {
      table.increments();
      table.string('VIN', 255);
      table.string('make', 128).notNullable();
      table.string('model', 128).notNullable();
      table.integer('mileage').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
