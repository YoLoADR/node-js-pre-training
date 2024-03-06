const fs = require('fs');
const path = require('path');
const startTime = Date.now();

// Lecture des fichiers de manière synchrone
const file1 = fs.readFileSync(path.join(__dirname, 'file1.txt'), 'utf8');
console.log(file1);
const file2 = fs.readFileSync(path.join(__dirname, 'file2.txt'), 'utf8');
console.log(file2);

// Simulation d'une opération de calcul
const sum = 1 + 2;
console.log(`Somme calculée: ${sum}`);

// Simulation d'une tâche longue
const endTimeForLongTask = Date.now() + 2000; // Ajoute 2 secondes
while (Date.now() < endTimeForLongTask) {
    // Simule une tâche longue
}

const endTime = Date.now();
console.log(`Opération bloquante terminée en ${endTime - startTime}ms`);
