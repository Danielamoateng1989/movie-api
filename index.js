/* eslint-disable no-console */
const express = require('express')
const movies = require('./movies')
const app = express()





app.get('/', (req, res) => {
  res.send('Hello World')
})


app.get('/movies', (req, res) => {
  return res.send(movies)
})






const port = 3000

app.listen(3000, () => {
  console.log(`listening on port ${port}`)
})
