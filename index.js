const express = require('express')
require ('dotenv').config()
// import { Express } from 'express' // both the line 1 and 2 are same , 
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(('/twitter') , (req , res) => {
    res.send('shreyash.com')
})

app.get(('/login') , (req , res) => {
    res.send('Please login here')
    res.send('<h1>Please login as a user</h1>')
})

// we've made a server 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


