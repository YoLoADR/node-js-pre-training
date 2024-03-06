const fs = require('fs');
const path = require('path');
const startTime = Date.now();

let pendingTasks = 4; // Inclut les lectures de fichiers, le calcul, et la simulation de tâche longue

// Lecture des fichiers de manière asynchrone
fs.readFile(path.join(__dirname, 'file1.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    checkIfDone();
});

fs.readFile(path.join(__dirname, 'file2.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    checkIfDone();
});

// Simulation d'une opération de calcul
const sum = 1 + 2;
console.log(`Somme calculée: ${sum}`);
checkIfDone();

// Simulation d'une tâche longue de manière non bloquante
setTimeout(() => {
    console.log("Tâche longue terminée.");
    checkIfDone();
}, 2000); // Simule une tâche longue avec un délai de 2 secondes

function checkIfDone() {
    if (--pendingTasks <= 0) {
        const endTime = Date.now();
        console.log(`Opération non bloquante terminée en ${endTime - startTime}ms`);
    }
}
