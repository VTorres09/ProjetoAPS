import express from 'express'

let path = require('path');
let UserController = require('./controllers/UserController');

const app = express()

const port = 3000

const userController = new UserController()

app.use(express.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public/'));

app.set('views',  path.join(__dirname, ".", "views"))

// ROUTES: 

// GETS:
app.get("/", (req, res) => {
    res.render('LoginView')
})

app.get("/login", (req, res) => {
    res.render('LoginView')
})

app.get("/sign", (req, res) => {
    res.render('SignUpView')
})

app.get("/menu_item", (req, res) => {
    res.render('MenuItemCreationView')
})

// POSTS:
app.post("/register", (req, res) => {
    userController.cadastrarUsuario(req.body.cpf, req.body.pass)
    res.end()
    res.redirect('/login')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})