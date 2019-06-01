require('dotenv').config()

const {
  SQL_DB_HOST,
  SQL_DB_USER,
  SQL_DB_PASSWORD,
  SQL_DB_DATABASE_NAME
} = process.env

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: SQL_DB_HOST,
      user: SQL_DB_USER,
      password: SQL_DB_PASSWORD,
      database: SQL_DB_DATABASE_NAME
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
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
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  local: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: SQL_DB_USER,
      password: SQL_DB_PASSWORD,
      database: SQL_DB_DATABASE_NAME
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
