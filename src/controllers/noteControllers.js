const { notes } = require("../utils");

// Fetching all notes
const getNotes = (req, res) => {
  return res.status(200).json({
    data: notes,
  });
};

// Fetching single notes by id
const getSinlgeNotes = (req, res) => {
  const notesId = parseInt(req.params.notesId);

  const singleNotes = notes.find((note) => {
    return note.id === notesId;
  });

  if (!singleNotes) {
    return res.status(404).json({
      message: `note with id: ${notesId} not found`,
    });
  }
  res.status(200).json({
    data: singleNotes,
  });
};

//create note
const createNote = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(400)
      .json({ message: "Please provide both title and content for the note." });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    content,
  };

  notes.push(newNote);

  res.status(201).json({
    message: "Note created successfully",
    data: newNote,
  });
};

//update note
const updateNote = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const noteIndex = notes.findIndex((note) => note.id === parseInt(id));

  // Check if the note exists
  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  // Update the note
  // guhindura  title and content of the note while keeping its ID unchanged
  notes[noteIndex] = { id: notes[noteIndex].id, ...data };

  res.status(200).json({
    message: "Note updated successfully",
    data: notes[noteIndex],
  });
};

//delete note
const deleteNote = (req, res) => {
  const { id } = req.params;
  const noteIndex = notes.findIndex((note) => note.id === parseInt(id));
  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }
  notes.splice(noteIndex, 1);
  res.status(200).json({
    message: "Note deleted successfully",
  });
};

module.exports = { getNotes, getSinlgeNotes, createNote, updateNote,deleteNote };
