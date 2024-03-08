// app.js
const express = require('express');
const app = express();

// Middleware pour analyser les corps de requête JSON entrants
app.use(express.json());

// Route GET simple qui retourne un message de bienvenue
app.get('/', (req, res) => {
    // La réponse que le serveur enverra lors de l'accès à la racine
    res.status(200).send('Welcome to the Express server!');
});

// Route POST qui reçoit un objet JSON et le renvoie
app.post('/echo', (req, res) => {
    // Renvoie directement ce qui a été envoyé à cette route
    res.status(200).json(req.body);
});

// Route GET pour récupérer des utilisateurs (exemple simplifié)
app.get('/users', (req, res) => {
    // Simulons un tableau d'utilisateurs que l'on pourrait obtenir d'une base de données
    const users = [{ name: 'Alice' }, { name: 'Bob' }];
    res.status(200).json(users);
});

// Exporte l'application pour l'utiliser dans les tests
module.exports = app;
