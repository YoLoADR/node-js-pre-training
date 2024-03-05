const chalk = require('chalk') // Challenge 1: Importez le module 'chalk'. Discutez de l'utilité de ce module pour personnaliser l'affichage des textes dans la console.

const yargs = require('yargs') // Challenge 2: Importez le module 'yargs'. Expliquez son rôle dans la gestion des arguments de ligne de commande pour les applications Node.js.

const getNotes = require('./notes.js') // Challenge 3: Importez la fonction 'getNotes' depuis le fichier 'notes.js'. Discutez de l'utilisation des modules pour structurer une application Node.js.

// Customize yargs version
yargs.version('1.1.0') // Challenge 4: Personnalisez la version de 'yargs'. Expliquez comment la version peut influencer l'utilisation de l'application par les utilisateurs finaux.

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!') // Challenge 5: Définissez une commande 'add' avec yargs pour ajouter une nouvelle note. Discutez de la structure d'une commande yargs et de son rôle.
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note') // Challenge 6: Définissez une commande 'remove' avec yargs pour supprimer une note existante. Expliquez comment les commandes peuvent être utilisées pour interagir avec l'application.
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes') // Challenge 7: Définissez une commande 'list' pour lister toutes les notes. Discutez de l'importance de visualiser les informations stockées.
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note') // Challenge 8: Définissez une commande 'read' pour lire le contenu d'une note spécifique. Expliquez comment accéder aux données spécifiques peut être utile dans une application.
    }
})

console.log(yargs.argv) // Challenge 9: Affichez les arguments de ligne de commande analysés par yargs. Discutez de l'importance de comprendre les entrées de l'utilisateur dans le développement de commandes CLI.
