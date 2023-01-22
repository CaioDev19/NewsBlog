/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("category")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("category").insert([
        { name: "Local" },
        { name: "Bahia" },
        { name: "Brasil" },
        { name: "Esporte" },
        { name: "Internacional" },
        { name: "Famosos" },
      ])
    })
}
