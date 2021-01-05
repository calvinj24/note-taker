const router = require("express").Router();
const { findById, createNewNote, deleteNote } = require('../../lib/notes')
const { notes } = require("../../db");
const uniqid = require('uniqid');
const { cpuUsage } = require("process");

// get all notes
router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

// get notes by id
router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(400)
  }
});

// add new note
router.post('/notes', (req, res) => {
  console.log(req.body);
  req.body.id = uniqid();
  const note = createNewNote (req.body, notes);
  res.json(note);
});

// delete note
router.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id, notes);
  res.json(notes);
});

module.exports  = router;