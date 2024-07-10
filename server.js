// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // Sirve archivos estáticos


app.get('/env', (req, res) => {
    res.json({ message: process.env.ENV_MESSAGE_TEST });
});

app.get('/env2', (req, res) => {
    res.json({ message: process.env.ENV_MESSAGE_TEST_2 });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
