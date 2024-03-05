const chalk = require('chalk') // Challenge 1: Importez le module 'chalk'. Discutez pourquoi nous utilisons ce module et comment il peut améliorer l'affichage de la console.

const yargs = require('yargs') // Challenge 2: Importez le module 'yargs'. Expliquez son utilité dans la gestion des arguments de ligne de commande.

const getNotes = require('./notes.js') // Challenge 3: Importez la fonction 'getNotes' depuis le fichier 'notes.js'. Discutez de l'importance de la modularité et de la réutilisation du code.

// Customize yargs version
yargs.version('1.1.0') // Challenge 4: Personnalisez la version de yargs. Discutez de l'importance de la version dans le contexte des applications de ligne de commande.

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // Exige que l'option soit fournie par l'utilisateur
            type: 'string' // Définit le type de l'option
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title) // Affiche le titre de la note
        console.log('Body: ' + argv.body) // Affiche le corps de la note
    }
}) // Challenge 5: Créez une commande 'add' qui nécessite un titre et un corps. Discutez comment 'builder' permet de définir les options pour les commandes.

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note') // Challenge 6: Créez une commande 'remove' qui supprime une note existante. Discutez des actions qui doivent être effectuées lors de la suppression d'une note.
}) 

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes') // Challenge 7: Créez une commande 'list' pour afficher toutes les notes existantes. Discutez de l'importance de lister les informations dans les applications CLI.
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note') // Challenge 8: Créez une commande 'read' pour lire le contenu d'une note spécifique. Discutez de la manière d'accéder à une information spécifique dans un ensemble de données.
})

yargs.parse() // Challenge 9: Analysez les arguments de ligne de commande. Discutez de l'importance de cette fonction pour intégrer yargs dans votre application.
