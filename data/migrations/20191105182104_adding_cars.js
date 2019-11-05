
exports.up = function(knex) {
    return knex.schema.createTable('someCars', function(table) {
        table.increments();
        table.string('VIN', 255).notNullable();
        table.string('make', 128).notNullable();
        table.string('model', 128).notNullable();
        table.integer('mileage').notNullable();
        table.string('transmissionType', 128);
        table.string('statusofTitle', 128);
        table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('someCars');
  };