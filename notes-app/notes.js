const fs = require('fs') // 'fs' permet d'interagir avec le système de fichiers, notamment pour lire et écrire des fichiers.

const getNotes = function () {
    return 'Your notes...' // Retourne un message simple; vous pourriez étendre cela pour retourner les notes actuelles.
}

const addNote = function (title, body) {
    const notes = loadNotes() // Charge les notes existantes.
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title // Vérifie si une note avec le même titre existe déjà.
    })

    if (duplicateNotes.length === 0) {
        notes.push({ title: title, body: body }) // Ajoute la nouvelle note si aucun doublon n'a été trouvé.
        saveNotes(notes) // Sauvegarde les nouvelles notes dans le fichier.
        console.log('New note added!')
    } else {
        console.log('Note title taken!') // Avertit l'utilisateur si le titre est déjà pris.
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes) // Convertit l'objet notes en chaîne JSON.
    fs.writeFileSync('notes.json', dataJSON) // Écrit la chaîne JSON dans le fichier 'notes.json'.
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json') // Tente de lire le fichier 'notes.json'.
        const dataJSON = dataBuffer.toString() // Convertit le buffer en chaîne de caractères.
        return JSON.parse(dataJSON) // Convertit la chaîne JSON en objet JavaScript.
    } catch (e) {
        return [] // Retourne un tableau vide si le fichier n'existe pas ou s'il y a une autre erreur.
    }
}

module.exports = { getNotes, addNote } // Exporte les fonctions pour les rendre disponibles dans d'autres fichiers.
