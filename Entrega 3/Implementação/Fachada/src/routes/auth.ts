import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send("WebService Ok! 2")  
});

module.exports = routes