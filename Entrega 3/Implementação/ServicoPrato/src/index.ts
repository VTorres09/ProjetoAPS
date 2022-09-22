import express from 'express';
import Fachada from './Fachada';
import bodyParser from 'body-parser';

const app = express();
const port = 3002;

app.use(bodyParser.json())

app.get('/ingredients', async (req, res) => {
  Fachada.getIngredientes().then((ingredientes) => {
    ingredientes ? res.json(ingredientes) : res.json(ingredientes)
  })
})

app.get('/', async (req, res) => {
  
  Fachada.listarPratos().then((pratos) => {
    pratos ? res.json(pratos) : res.json(pratos)
  })

});

app.put('/:id', async (req, res) => {
  Fachada.updatePrato(req.body.params.id, req.body.name, req.body.description).then( (sucesso) => {
    sucesso ? res.send('Prato atualizado com sucesso!') : res.send('Prato não pôde ser atualizado com sucesso')
  } )
});

app.post('/', async (req, res) => {
  Fachada.cadastrarPrato(req.body.name, req.body.description, req.body.ingredients).then( (sucesso) => {
    sucesso ? res.send('Prato cadastrado com sucesso!') : res.send('Prato não pôde ser cadastrado com sucesso')
  } )
});

app.delete('/:id', (req, res) => {
  Fachada.deletarPrato(req.body.params.id).then( (sucesso) => {
    sucesso ? res.send('Prato deletado com sucesso!') : res.send('Prato não pôde ser deletado com sucesso')
  } )
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});