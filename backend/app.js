const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');


const app = express();


const dotenv = require('dotenv');
const result = dotenv.config();
if(result.error){
  throw result.error
}
//Connexion à la base de donnés MongoDB
 mongoose.connect("mongodb+srv://<Groupomania>:<ns6jKeiPadSytvR2>@cluster0.xl8le.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


module.exports = app;
