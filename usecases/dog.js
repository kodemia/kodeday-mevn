
const Dog = require('../models/dog')

function getAll() {
  return Dog.query()
}

function create(dogData){
  return Dog.query().skipUndefined().insert(dogData)
}

function deleteById (dogId) {
  return Dog.query().deleteById(dogId)
}

module.exports = {
  getAll,
  create,
  deleteById
}