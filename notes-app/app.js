const chalk = require('chalk') // Challenge 1: Importez le module 'chalk'. Expliquez l'utilité de ce module pour la personnalisation de l'affichage des textes dans la console.

const getNotes = require('./notes.js') // Challenge 2: Importez la fonction 'getNotes' depuis le fichier 'notes.js'. Discutez de l'importance de séparer le code en modules pour une meilleure organisation.

const msg = getNotes() // Challenge 3: Utilisez la fonction 'getNotes' pour obtenir des notes et stockez le résultat dans 'msg'. Expliquez comment les fonctions peuvent être utilisées pour récupérer et organiser des données.

console.log(msg) // Challenge 4: Affichez le message retourné par 'getNotes' en utilisant 'console.log'. Discutez de l'importance de l'affichage des informations pour le débogage et le feedback utilisateur.

const greenMsg = chalk.green.inverse.bold('Success!') // Challenge 5: Créez un message personnalisé 'Success!' en utilisant les styles de 'chalk'. Expliquez comment la méthode 'green.inverse.bold' modifie l'apparence du texte.

console.log(greenMsg) // Challenge 6: Utilisez 'console.log' pour afficher le message stylisé. Discutez des avantages de l'utilisation de styles dans les messages de la console pour une meilleure lisibilité.
