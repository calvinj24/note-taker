const router = require("express").Router();
const { findById, createNewNote } = require('../../lib/notes')
const { notes } = require("../../db");
const uniqid = require('uniqid');

// get all notes
router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

// get notes by id
router.get("/notes/:id", (req, res) => {
  console.log(req.params.id);
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(400)
  }
});

// add new note
router.post('/notes', (req, res) => {
  req.body.id = uniqid();
  //console.log(req.body);
  const note = createNewNote (req.body, notes);
  res.json(note);
});

module.exports  = router;