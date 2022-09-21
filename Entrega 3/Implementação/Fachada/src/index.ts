import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const authRoute = require("./routes/auth");
const pratosRoute = require("./routes/pratos");

app.use(bodyParser.json())
app.use("/auth", authRoute)
app.use("/pratos", pratosRoute)

app.get('/', (req, res) => {
  res.send("WebService Ok!")  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});