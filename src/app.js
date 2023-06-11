const express = require('express');
const rotas = require('./router');

const app = express();

app.use(express.json());
app.use(rotas)

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});