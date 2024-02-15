const express = require("express");
const {
  getNotes,
  getSinlgeNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteControllers");

const router = express.Router();

//get notes
router.get("/", getNotes);

// get one note
router.get("/:notesId", getSinlgeNotes);

//create note
router.post("/", createNote);

//update
router.put("/:id", updateNote);

//delete
router.delete("/:id", deleteNote);

//to export routes
module.exports = router;
