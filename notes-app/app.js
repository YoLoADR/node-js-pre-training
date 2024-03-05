const chalk = require('chalk') // Challenge 1: Importez le module 'chalk' pour styliser le texte affiché dans la console. Expliquez ce qu'est un module et comment il est utilisé dans Node.js.

const getNotes = require('./notes.js') // Challenge 2: Importez la fonction 'getNotes' depuis le fichier 'notes.js'. Discutez de l'importance de la modularité et du réusinage du code.

const command = process.argv[2] // Challenge 3: Récupérez le troisième argument de la ligne de commande et stockez-le dans la variable 'command'. Expliquez comment 'process.argv' fonctionne et son utilité.

console.log(process.argv) // Challenge 4: Affichez le tableau des arguments de la ligne de commande. Discutez de la structure de 'process.argv' et comment les arguments sont passés à un script Node.js.

if (command === 'add') {
    console.log('Adding note!') // Challenge 5: Implémentez une condition pour vérifier si la commande est 'add'. Si oui, affichez 'Adding note!'. Discutez de l'utilisation des instructions conditionnelles en JavaScript.
} else if (command === 'remove') {
    console.log('Removing note!') // Challenge 6: Ajoutez une autre condition pour vérifier si la commande est 'remove'. Si oui, affichez 'Removing note!'. Expliquez comment les structures conditionnelles permettent de gérer différents scénarios.
}
