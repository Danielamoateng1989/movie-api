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

// eslint-disable-next-line no-unused-vars
app.get('/movies/:searchBy', (req, res) => {
  const params = req.params.searchBy

  let searchByResults = []

  movies.forEach((data, index) => {
    const title = data.title.toLowerCase().search(params.toLowerCase())
    let directors = []

    data.directors.forEach((e) => {
      if (e.toLowerCase().search(params.toLowerCase()) >= 0) directors.push(index)
    })



    if (title >= 0 || directors.length > 0) searchByResults.push(index)
  })

  let response = []

  movies.forEach((value, index) => {
    if (searchByResults.includes(index)) response.push(value)
  })

  res.status(200).send(response)
})




const port = 3000

app.listen(3000, () => {
  console.log(`listening on port ${port}`)
})
