const fs = require('fs') // Challenge 1: Importez le module 'fs'. Ce module permet d'effectuer des opérations liées au système de fichiers, comme lire et écrire des fichiers.

const dataBuffer = fs.readFileSync('1-json.json') // Challenge 2: Lisez le contenu de '1-json.json'. 'readFileSync' lit le contenu d'un fichier et le retourne sous forme de buffer, une représentation binaire des données.

const dataJSON = dataBuffer.toString() // Challenge 3: Convertissez le buffer en chaîne de caractères. Les buffers doivent être convertis en chaînes pour être lisibles et traitables comme du texte.

const user = JSON.parse(dataJSON) // Challenge 4: Transformez la chaîne JSON en objet JavaScript. 'JSON.parse' analyse une chaîne de caractères formatée en JSON et la convertit en un objet JavaScript.

user.name = 'Gunther' // Challenge 5: Changez le nom de l'utilisateur dans l'objet. Les objets JavaScript peuvent être modifiés en accédant directement à leurs propriétés.

user.age = 54 // Challenge 6: Changez l'âge de l'utilisateur dans l'objet. Cela montre comment on peut modifier différentes propriétés d'un objet JavaScript.

const userJSON = JSON.stringify(user) // Challenge 7: Convertissez l'objet utilisateur modifié en une chaîne JSON. 'JSON.stringify' prend un objet JavaScript et le transforme en une chaîne JSON.

fs.writeFileSync('1-json.json', userJSON) // Challenge 8: Écrivez la nouvelle chaîne JSON dans le fichier '1-json.json'. 'writeFileSync' crée un nouveau fichier ou remplace un fichier existant et y écrit des données.
