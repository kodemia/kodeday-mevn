
const moment = require('moment')
const { Model } = require('objection')

const db = require('../lib/db')

Model.knex(db.knex)

class Customer extends Model {
  static get tableName () {
    return 'dog'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name', 'age', 'gender'],
      properties: {
        id: {
          type: 'integer'
        },

        name: {
          type: 'string'
        },
        age: {
          type: 'integer'
        },
        gender: {
          type: 'string',
          enum: ['male', 'female']
        },
        isAdopted: {
          type: 'booelan'
        },

        isDeleted: {
          type: 'boolean'
        },
        createdAt: {
          type: 'string'
        },
        updatedAt: {
          type: 'string'
        }
      }
    }
  }
}

module.exports = Customer
