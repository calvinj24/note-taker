const router = require("express").Router();
const { createNewNote } = require('../../lib/notes')
const { notes } = require("../../db");

// get all notes
router.get("/notes", (req, res) => {
  let results = notes;

  res.json(results);
});

// get notes by id
//router.get("/notes/:id", (req, res) => {
//  let results = data;
//
//  res.json(results);
//});

// add new note
router.post('/notes', (req, res) => {
  //console.log(req.body);
  req.body.id = 1;
  const note = createNewNote (req.body, notes);
  res.json(note);
});

module.exports  = router;