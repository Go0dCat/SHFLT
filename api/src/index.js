const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const config =  require('../config');

const app = express();
app.use(express.json())

//db connecttion
mongoose.Promise = global.Promise;
mongoose.connect(config.CONNECTION, {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => {console.log("yo"); console.error(error)});
db.once('open', () => console.log('Connected to db'));

//frontend
//app.use(express.static('../../client/public'));

//fixes cors
app.use(cors());

app.use(express.json());

app.use('/api', require('../routes/api'));

//error handling from db
/*
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});
*/

app.listen(config.PORT, config.HOST, () => {
  console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
});