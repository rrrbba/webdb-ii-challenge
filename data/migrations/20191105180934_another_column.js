
exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {

        tbl.string('statusofTitle', 128);
    })
};

exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {

        tbl.dropColumn('statusofTitle');
    })
};
