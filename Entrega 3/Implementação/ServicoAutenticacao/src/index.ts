import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send("Autenticacao Ok!")
});

app.listen(port);