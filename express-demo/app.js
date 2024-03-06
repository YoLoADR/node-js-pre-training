// Importer Express pour créer notre serveur API
const express = require('express');
// Initialiser une nouvelle application Express
const app = express();

// Challenge : Créer un tableau pour stocker les données des tâches. Pourquoi utiliser un tableau ici ?
// Explication : On utilise un tableau pour garder une liste des tâches. C'est simple et rapide pour stocker et accéder à nos données temporairement.
let todos = [
    { id: 1, title: 'Acheter du café', completed: false },
    { id: 2, title: 'Faire un post sur Linkedin', completed: true }];

// Permettre à Express de traiter le corps des requêtes JSON
app.use(express.json());

// Définir une route de base qui envoie un message de bienvenue
// Challenge : Comment répondre à une requête GET sur la racine ?
// Explication : On utilise app.get() pour écouter les requêtes GET sur '/', et on envoie un message de bienvenue avec res.send().
app.get('/', (req, res) => {
  res.send('Hello World avec Express.js!');
});

// Définir une route pour récupérer toutes les tâches
// Challenge : Comment envoyer toutes les tâches stockées en réponse ?
// Explication : On utilise res.json() pour convertir notre tableau de tâches en JSON et l'envoyer comme réponse à une requête GET sur '/todos'.
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Définir une route pour ajouter une nouvelle tâche
// Challenge : Comment traiter l'ajout d'une nouvelle tâche via une requête POST ?
// Explication : On récupère le titre de la tâche depuis le corps de la requête (req.body.title), on crée un nouvel objet todo, puis on l'ajoute à notre tableau avec push().
app.post('/todos', (req, res) => {
    const todo = { id: todos.length + 1, title: req.body.title, completed: false };
    todos.push(todo);
    res.status(201).send(todo);
});

// Définir une route pour mettre à jour une tâche
// Challenge : Comment trouver et mettre à jour une tâche spécifique ?
// Explication : On cherche la tâche par son ID. Si trouvée, on la met à jour avec les nouvelles données. Sinon, on renvoie une erreur 404.
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
        const updatedTodo = { ...todos[todoIndex], ...req.body };
        todos[todoIndex] = updatedTodo;
        res.send(updatedTodo);
    } else {
        res.status(404).send({ message: 'Todo not found' });
    }
});

// Définir une route pour supprimer une tâche
// Challenge : Comment supprimer une tâche du tableau ?
// Explication : On cherche la tâche par son ID. Si trouvée, on la supprime avec splice(). Sinon, on renvoie une erreur 404.
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send({ message: 'Todo not found' });
    }
});

// Démarrer le serveur sur un port spécifique
// Challenge : Comment démarrer le serveur et écouter sur un port ?
// Explication : On utilise app.listen() avec un port. On utilise PORT pour permettre la configuration du port via les variables d'environnement ou utiliser 3000 par défaut.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
