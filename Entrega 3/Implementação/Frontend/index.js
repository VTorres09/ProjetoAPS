const express = require('express');
const path = require('path')
const app = express();

app.use(express.static("public"));

const port = 8080;

app.get('/',function(req,res){
    res.redirect('/login')
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