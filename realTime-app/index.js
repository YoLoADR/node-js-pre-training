const express = require('express'); // Importe le module Express pour faciliter la création du serveur HTTP
const http = require('http'); // Module HTTP natif de Node.js pour créer un serveur HTTP
const socketIo = require('socket.io'); // Importe Socket.IO pour la communication en temps réel

const app = express(); // Crée une instance d'Express pour configurer ton serveur web
const server = http.createServer(app); // Crée un serveur HTTP basé sur ton application Express
const io = socketIo(server); // Initialise Socket.IO avec le serveur HTTP, permettant la communication WebSocket

// Route HTTP qui gère la demande GET à la racine. C'est ici que tu sers ta page HTML.
app.get('/', (req, res) => {
    // __dirname est une variable d'environnement qui indique le répertoire actuel du fichier exécuté
    // res.sendFile envoie le fichier spécifié au client, dans ce cas, ton fichier HTML
    res.sendFile(__dirname + '/index.html');
});

// Écouteur d'événements pour les nouvelles connexions WebSocket à ton serveur
io.on('connection', (socket) => {
    // Ce callback est exécuté chaque fois qu'un nouveau client se connecte
    console.log('Un utilisateur s\'est connecté');

    // Écouteur pour l'événement 'disconnect', qui est émis lorsque le client se déconnecte
    socket.on('disconnect', () => {
        // Ceci est exécuté lorsque l'utilisateur se déconnecte de la session WebSocket
        console.log('Un utilisateur s\'est déconnecté');
    });

    // Écouteur pour un message personnalisé 'message'. Tu définis toi-même ces événements.
    socket.on('message', (msg) => {
        // Quand le serveur reçoit un message, il l'affiche dans la console
        console.log('Message: ' + msg);
        // io.emit envoie un message à tous les clients connectés. Ici, on renvoie le message reçu à tous les clients.
        io.emit('message', msg);
    });
});

const PORT = process.env.PORT || 3000; // Définit le port sur lequel le serveur doit écouter
server.listen(PORT, () => { // Démarre le serveur pour qu'il écoute les demandes
    console.log(`Serveur démarré sur le port ${PORT}`);
});

