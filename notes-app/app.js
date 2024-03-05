const chalk = require('chalk') // Utilisez 'chalk' pour ajouter de la couleur au texte dans la console, facilitant la distinction des messages.

const yargs = require('yargs') // Utilisez 'yargs' pour construire une interface de ligne de commande interactive, facilitant la réception et le traitement des entrées utilisateur.

const notes = require('./notes.js') // Importez les fonctionnalités du fichier 'notes.js' pour pouvoir les utiliser dans ce fichier.

yargs.version('1.1.0') // Définissez une version personnalisée pour votre application CLI, aidant les utilisateurs à identifier la version de votre outil.

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' // Définit le type de l'option 'title', forçant l'utilisateur à fournir une chaîne de caractères.
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body) // Ajoute une nouvelle note en utilisant les arguments fournis par l'utilisateur.
    }
}) // Créez une nouvelle commande 'add' pour ajouter des notes.

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title) // Supprime la note correspondante en utilisant le titre fourni par l'utilisateur.
    }
}) // Créez une nouvelle commande 'remove' pour supprimer des notes.

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()