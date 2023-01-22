/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("post", (table) => {
    table.increments("id").primary()
    table.string("image_name").notNullable()
    table.string("image_url").notNullable()
    table.string("title").notNullable()
    table.string("summary").notNullable()
    table.text("content").notNullable()
    table.integer("category_id").notNullable()
    table.date("date").defaultTo(knex.fn.now())
    table.foreign("category_id").references("id").inTable("category")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("post")
}
