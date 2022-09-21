import express from 'express';

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send("Prato Ok!")
});

app.listen(port);