const express = require("express");
const { getNotes, getSinlgeNotes } = require("../controllers/noteControllers");
const router = express.Router();

//get notes
router.get("/", getNotes);

// get one note
router.get("/:notesId", getSinlgeNotes);

// create notes
// router.post("/create",createNotes);

router.post("/", (req, res) => {
  const { title, content } = req.body;

  //aka validation gato
  if (!title || !content) {
    return res
      .status(400)
      .json({ message: "Please fill both title and content." });
  }
  const newNote = addNote(title, content);
  res.status(201).json({
    message: "Note added successfully",
    data: newNote,
  });
});

//to export routes
module.exports = router;
