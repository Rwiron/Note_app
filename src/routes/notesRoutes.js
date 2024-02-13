const express = require("express");
const router = express.Router(); //define routes and invoke it
const { notes, addNote } = require("../utils");

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "All notes",
    data: notes, // Make sure `notes` is defined in this file
  });
});

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
