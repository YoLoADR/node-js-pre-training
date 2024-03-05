const fs = require('fs') // Utilisez le module 'fs' pour lire et écrire dans des fichiers, permettant la persistance des notes.

const chalk = require('chalk') // Utilisez 'chalk' pour colorer les messages de sortie, améliorant la lisibilité et l'expérience utilisateur.

const getNotes = function () {
    return 'Your notes...' // Retourne une chaîne de caractères simple pour le moment; pourrait être étendue pour retourner les notes réelles.
}

const addNote = function (title, body) {
    const notes = loadNotes() // Charge les notes actuelles à partir d'un fichier.
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title // Vérifie si une note avec le même titre existe déjà.
    })

    if (duplicateNotes.length === 0) {
        notes.push({ title: title, body: body }) // Ajoute la note au tableau si aucun doublon n'est trouvé.
        saveNotes(notes) // Sauvegarde le nouveau tableau de notes dans le fichier.
        console.log(chalk.green.inverse('New note added!')) // Confirme l'ajout de la note à l'utilisateur.
    } else {
        console.log(chalk.red.inverse('Note title taken!')) // Informe l'utilisateur que le titre est déjà utilisé.
    }
}

const removeNote = function (title) {
    const notes = loadNotes() // Charge les notes existantes.
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title // Filtre les notes pour ne conserver que celles dont le titre est différent du titre fourni.
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!')) // Informe l'utilisateur que la note a été supprimée.
        saveNotes(notesToKeep) // Sauvegarde le nouveau tableau de notes.
    } else {
        console.log(chalk.red.inverse('No note found!')) // Informe l'utilisateur qu'aucune note correspondante n'a été trouvée.
    }    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes) // Convertit le tableau de notes en une chaîne de caractères JSON.
    fs.writeFileSync('notes.json', dataJSON) // Écrit la chaîne JSON dans le fichier, sauvegardant ainsi les notes.
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json') // Tente de lire le fichier de notes.
        const dataJSON = dataBuffer.toString() // Convertit le contenu binaire (buffer) en chaîne de caractères.
        return JSON.parse(dataJSON) // Convertit la chaîne de caractères JSON en objet JavaScript.
    } catch (e) {
        return [] // Retourne un tableau vide si le fichier n'existe pas ou en cas d'erreur.
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
