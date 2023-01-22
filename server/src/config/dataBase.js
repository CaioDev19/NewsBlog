const knexfile = require("../../knexfile")
const env = process.env.KNEX_FILE || "development"
const knex = require("knex")(knexfile[env])

module.exports = knex
