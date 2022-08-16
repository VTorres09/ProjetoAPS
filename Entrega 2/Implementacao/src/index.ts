import express from 'express';

let path = require('path');
let UserController = require('./controllers/UserController');
let PratoController = require('./controllers/PratoController');
let ComunicacaoCozinha = require('./subsistema/ComunicacaoCozinha.ts')
let bodyParser = require('body-parser')

const app = express()

const port = 3000

const pratoController = new PratoController();

const userController = new UserController();

const comunicacaoCozinha = new ComunicacaoCozinha();

app.use(express.urlencoded({
    extended: true
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public/'));

app.set('views', path.join(__dirname, ".", "views"))

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

app.get("/dishes", (req, res) => {
    res.render('DishesListView')
})

app.get("/menu_item", (req, res) => {
    res.render('MenuItemCreationView', { token: undefined })
})

app.get("/menu_item/:token", (req, res) => {
    res.render('MenuItemCreationView', { token: req.params.token })
})

app.get("/kitchen/:food", async (req, res) => {

    res.set('Content-Type', 'application/json')

    res.send(JSON.stringify(await comunicacaoCozinha.buscarIngredientes(req.params.food)))
})

app.post("/prato/:id", (req, res) => {
    pratoController.deletarPrato(req.params.id);
    res.redirect('/menu_item')
    res.end()
})

app.get("/prato", async (req, res) => {
    var response = await pratoController.listarPratos();
    console.log(response)
    res.send(JSON.stringify(response))
})

app.delete("/prato", async (req, res) => {
    var response = await pratoController.listarPratos();
    console.log(response)
    res.send(JSON.stringify(response))
})

// POSTS:
app.post("/register", (req, res) => {
    userController.cadastrarUsuario(req.body.cpf, req.body.pass)
    res.redirect('/login')
    res.end()
})

// POSTS:
app.post("/login", async (req, res) => {
    const success = await userController.autenticarUsuario(req.body.cpf, req.body.pass)
    if (success) {
        res.redirect(`/menu_item/${req.body.cpf}`)
    }
    else {
        res.redirect("/login")
    }
    res.end()
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})