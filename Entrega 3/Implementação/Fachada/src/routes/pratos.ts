import express from 'express';
import axios from 'axios';

const routes = express.Router();

const SERVICO_PRATO_URL = 'http://localhost:3002'

routes.get('/', async (req, res) => {

  const servicoAcessoResponse = await axios.get(SERVICO_PRATO_URL + "/", {});
  res.json(servicoAcessoResponse.data); 

});

routes.put('/:id', async (req, res) => {

  const servicoAcessoResponse = await axios.put(SERVICO_PRATO_URL + "/" + req.params.id, 
    req.body
  );
  res.json(servicoAcessoResponse.data);  

});

routes.post('/', async (req, res) => {
  
  const servicoAcessoResponse = await axios.post(SERVICO_PRATO_URL, 
    req.body
  );
  res.json(servicoAcessoResponse.data);  

});

routes.delete('/:id', async (req, res) => {

  const servicoAcessoResponse = await axios.delete(SERVICO_PRATO_URL + "/" +  req.params.id, 
    req.body
  );
  res.json(servicoAcessoResponse.data);  


});

module.exports = routes