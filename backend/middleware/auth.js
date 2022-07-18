//Middleware gérant la protection de nos routes en fonction de l'état user (authentifié ou non)
const jwt = require('jsonwebtoken'); //utilisation de package Jsonwebtoken
require("dotenv").config();
const TOKEN = process.env.TOKEN;

//On met en place le middleware permettant de sécuriser nos routes
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];//Récupération du token d'authentification présent dans le header Authorization
    const decodedToken = jwt.verify(token, `${TOKEN}`);//Décodage du token
    const userId = decodedToken.userId;
    req.auth = {userId};
    if (req.body.userId && req.body.userId !== userId) {
      //On vérifie si la requête contient un id user, et nous le comparons avec celui du token
      throw 'Invalid user ID'; //Erreur si aucune correspondance
    } else {
      //Sinno enchaîne sur le middleware suivant
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};