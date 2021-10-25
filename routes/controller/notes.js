const express = require("express");
const notes = require("./notesController");
const route = express.Router();

route.get("/", notes.allNotes);
route.get("/:id", notes.getNote);
route.post("/", notes.addNote);
route.delete("/:id", notes.deleteNote);
route.patch("/:id", notes.updateNote);

module.exports = route;
