const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Ajouter le middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale pour servir le fichier HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
