import express from 'express'

let path = require('path');

const app = express()

const port = 3000

app.set('view engine', 'ejs')

app.set('views',  path.join(__dirname, ".", "views"))

app.get("/", (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})