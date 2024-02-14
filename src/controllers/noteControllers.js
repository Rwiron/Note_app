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

module.exports = { getNotes, getSinlgeNotes };
