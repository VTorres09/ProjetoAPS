const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();

app.use(express.static("public"));

const port = 8080;
const FACHADA_URL = "http://localhost:3000"

app.use(bodyParser.json())


///////////////// ENDPOINTS ////////////////
app.post('/login', async (req,res) => {

    const postResponse = await axios.post(FACHADA_URL + "/auth/login", {
        cpf:        req.body.cpf,
        password:   req.body.password
    })

    res.send(postResponse.data)

});

app.post('/register', async (req,res) => {

    const postResponse = await axios.post(FACHADA_URL + "/auth/register", {
        cpf:        req.body.cpf,
        password:   req.body.password
    })

    res.send(postResponse.data)

});

app.get('/pratos', async (req,res) => {

    const pratosResponse = await axios.get(FACHADA_URL + "/pratos/", {})

    res.send("oi")

});


///// VIEWS //////
app.get('/',function(req,res){
    res.redirect('/register')
});

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/src/views/login.html'));
});

app.get('/register',function(req,res){
    res.sendFile(path.join(__dirname+'/src/views/register.html'));
});

app.get('/create-item',function(req,res){
    res.sendFile(path.join(__dirname+'/src/views/createItem.html'));
});

app.get('/dish-list',function(req,res){
    res.sendFile(path.join(__dirname+'/src/views/dishList.html'));
});


app.listen(port, () => {
    console.log("listening on port " + port)
})