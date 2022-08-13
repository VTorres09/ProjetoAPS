import express from 'express'

let path = require('path');
let UserController = require('./controllers/UserController');

const app = express()

const port = 3000

app.use(express.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public/'));

app.set('views',  path.join(__dirname, ".", "views"))

// ROUTES: 

app.get("/", (req, res) => {
    res.render('LoginView')
})

app.get("/login", (req, res) => {
    res.render('LoginView')
})

const userController = new UserController()

app.get("/sign", (req, res) => {
    res.render('SignUpView')
})

app.post("/register", (req, res) => {
    userController.cadastrarUsuario(req.body.cpf, req.body.pass)
    res.end()
    res.redirect('/login')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})