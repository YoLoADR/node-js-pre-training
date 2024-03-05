const validator = require('validator') // Challenge 1: Importez le module 'validator'. Expliquez ce que fait ce module et pourquoi il peut être utile.

const getNotes = require('./notes.js') // Challenge 2: Importez la fonction 'getNotes' depuis le fichier 'notes.js'. Discutez de la relation entre les fichiers et comment Node.js utilise 'require' pour importer des fonctionnalités.

const msg = getNotes() // Challenge 3: Stockez le résultat de 'getNotes()' dans la variable 'msg'. Expliquez le concept de variables et comment elles peuvent être utilisées pour stocker des données.

console.log(msg) // Challenge 4: Utilisez 'console.log' pour afficher le message retourné par 'getNotes'. Discutez de l'importance du débogage et comment 'console.log' peut y aider.

console.log(validator.isURL('https/mead.io')) // Challenge 5: Utilisez la méthode 'isURL' du module 'validator' pour vérifier si 'https/mead.io' est une URL valide. Discutez de la validation des données et de son importance.
