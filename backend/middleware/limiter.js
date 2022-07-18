//Middleware mis en place pour réguler les tentatives de connexion et éviter certaines attaques
const rateLimit = require("express-rate-limit"); //Utilisation du package Express rate limit

module.exports = rateLimit({
    windowMs: 15 * 60 * 1000, //Durée de blocage du compte
    max: 20,//Nous avons droit à 20 tentatives de connexion à partir de la même IP avant d'être bloqué durant 10 minutes
    message: 'limite du taux de demandes dépassé ! ',
});

module.exports = {limiter}; //Le module s'exporte sous forme d'objet