const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes() // Chargez les notes existantes.
    const duplicateNote = notes.find((note) => note.title === title) // Recherchez une note avec le même titre.

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body // Ajoutez la nouvelle note si aucun doublon n'a été trouvé.
        })
        saveNotes(notes) // Sauvegardez les notes mises à jour dans le fichier.
        console.log(chalk.green.inverse('New note added!')) // Informez l'utilisateur que la note a été ajoutée.
    } else {
        console.log(chalk.red.inverse('Note title taken!')) // Avertissez l'utilisateur si une note avec le même titre existe déjà.
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes() // Chargez les notes existantes.
    const note = notes.find((note) => note.title === title) // Trouvez la note avec le titre fourni.

    if (note) {
        console.log(chalk.inverse(note.title)) // Affichez le titre de la note trouvée.
        console.log(note.body) // Affichez le corps de la note trouvée.
    } else {
        console.log(chalk.red.inverse('Note not found!')) // Informez l'utilisateur si aucune note avec le titre fourni n'a été trouvée.
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}