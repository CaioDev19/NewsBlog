// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config()

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.PGHOST,
      port: process.env.PGPORT,
      user: process.env.PGUSER,
      password: String(process.env.PGPASSWORD),
      database: process.env.PGDATABASE,
    },
    migrations: {
      directory: `${__dirname}/src/config/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/config/seeds`,
    },
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT),
      user: process.env.PGUSER,
      password: String(process.env.PGPASSWORD),
      database: process.env.PGDATABASE,
    },
    migrations: {
      directory: `${__dirname}/src/config/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/config/seeds`,
    },
  },
}
