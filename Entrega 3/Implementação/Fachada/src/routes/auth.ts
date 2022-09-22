import axios from 'axios';
import express from 'express';

const routes = express.Router();

const SERVICO_ACESSO_URL = 'http://servico_acesso:3001'

routes.post('/login', async (req, res) => {

  const servicoAcessoResponse = await axios.post(SERVICO_ACESSO_URL + "/login",
    req.body
  );
  res.json(servicoAcessoResponse.data);

});


routes.post('/register', async (req, res) => {

  const servicoAcessoResponse = await axios.post(SERVICO_ACESSO_URL + "/register",
    req.body
  );
  res.json(servicoAcessoResponse.data);

});

module.exports = routes