
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "KKERNW1308W89TW234NF",
        make: "Ford",
        model: "Explorer",
        mileage: 2000000,
        transmissionType: "Automatic",
        statusofTitle: "Salvage"},
        {VIN: "KKERNW1308W89TW234NF",
        make: "Volkswagon",
        model: "Pasat",
        mileage: 1000,
        transmissionType: "Automatic",
        statusofTitle: "Clean"},
        {VIN: "KKERNW1308W89TW234NF",
        make: "Chevorlet",
        model: "Sonic",
        mileage: 700,
        transmissionType: "Automatic",
        statusofTitle: "Clean"}
      ]);
    });
};
