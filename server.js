const notes = require('./db/db');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});