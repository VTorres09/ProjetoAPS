import express from 'express';

const app = express();
const port = 3001;

app.post('/login', (req, res) => {
  res.send("login Ok!")
});

app.post('/register', (req, res) => {
  res.send("Registro Ok!")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});