import express from 'express'

let path = require('path');
let UserController = require('./controllers/UserController');
let PratoController = require('./controllers/PratoController');

const app = express()

const port = 3000

const pratoController = new PratoController();

const userController = new UserController();

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

app.post("/menu_item/create", (req, res) => {
    pratoController.cadastrarPrato(req.body.name, req.body.description, req.body.calories, req.body.ingredients);
    res.redirect('/menu_item')
    res.end()
})

// POSTS:
app.post("/register", (req, res) => {
    userController.cadastrarUsuario(req.body.cpf, req.body.pass)
    res.redirect('/login')
    res.end()
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})