
require('dotenv').config()

const express = require('express')
const cors = require('cors')

const dog = require('./usecases/dog')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'GET dogs API root',
  })
})

app.get('/dogs', async (req, res) => {
  const dogs = await dog.getAll()
  res.json({
    success: true,
    message: 'GET all dogs',
    payload: dogs
  })
})

app.post('/dogs', async (req, res) => {
  const {
    name,
    age,
    gender,
    breed
  } = req.body

  await dog.create({ name, age, gender, breed })

  res.json({
    success: true,
    message: 'Dog created successfuly'
  })
})

app.delete('/dogs/:id', async (req, res) => {
  const { id } = req.params
  await dog.deleteById(id)

  res.json({
    success: true,
    message: `DELETED dog ${id}`
  })
})

app.listen()