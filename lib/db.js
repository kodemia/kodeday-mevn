
const Knex = require('knex')
const { knexSnakeCaseMappers } = require('objection')

const {
  SQL_DB_HOST,
  SQL_DB_USER,
  SQL_DB_PASSWORD,
  SQL_DB_DATABASE_NAME
} = process.env

// SQL methods
const knex = Knex({
  client: 'mysql2',
  connection: {
    host: SQL_DB_HOST,
    user: SQL_DB_USER,
    password: SQL_DB_PASSWORD,
    database: SQL_DB_DATABASE_NAME
  },
  pool: {
    min: 0,
    max: 10
  },
  ...knexSnakeCaseMappers()
})

module.exports = { knex }
