const notesLib = require("../../lib/notes");
const router = require("express").Router();

// get all notes
router.get("/notes", (req, res) => {

    notesLib
        .getNotes()
        .then((notes) => 
            res.json(notes))
        .catch((err) => 
            res.status(500).json(err));
});

// add a note
router.post("/notes", (req, res) => {
    notesLib
        .addNote(req.body)
        .then((note) => 
            res.json(note))
        .catch((err) => 
            res.status(500).json(err));
});

// Delete note
router.delete("/notes/:id", (req, res) => {
    notesLib
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;