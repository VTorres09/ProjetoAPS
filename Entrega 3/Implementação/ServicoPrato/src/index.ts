import express from 'express';

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send("Listar Pratos!")
});

app.put('/:id', (req, res) => {
  res.send("Atualizar o prato " + req.params.id)
});

app.post('/', (req, res) => {
  res.send("Criar novo prato")
});

app.delete('/:id', (req, res) => {
  res.send("Deletar prato")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});