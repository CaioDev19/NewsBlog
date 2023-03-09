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
        { name: "Senhor do Bonfim" },
        { name: "Região" },
        { name: "Bahia" },
        { name: "Brasil" },
        { name: "Esportes" },
      ])
    })
}
