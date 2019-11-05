
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.string('transmissionType', 128);
    //   tbl.string('statusofTitle', 128).notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('transmissionType');
    //   tbl.dropColumn('statusofTitle');
  })
};
