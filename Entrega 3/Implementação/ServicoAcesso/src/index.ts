import express from 'express';
import Fachada from './Fachada';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(bodyParser.json())

app.post('/login', (req, res) => {
  Fachada.login(req.body.cpf, req.body.password)
    .then((successo) => {
      successo ? res.send('usuario entrou') : res.send('nao entrou')
    })
});

app.post('/register', (req, res) => {
  console.log(req)
  Fachada.register(req.body.cpf, req.body.password)
    .then((successo) => {
      successo ? res.send('usuario cadastrado') : res.send('usuario nao cadastrado')
    })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});