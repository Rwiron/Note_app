const { Note } = require("../database/models");

let notes = [];

// Fetching all notes
const getNotes = async (req, res) => {
  const data = await Note.findAll();
  return res.status(200).json({
    data,
  });
};

// Fetching single notes by id
// const getSinlgeNotes = (req, res) => {
//   const notesId = parseInt(req.params.notesId);

//   const singleNotes = notes.find((note) => {
//     return note.id === notesId;
//   });

//   if (!singleNotes) {
//     return res.status(404).json({
//       message: `note with id: ${notesId} not found`,
//     });
//   }
//   res.status(200).json({
//     data: singleNotes,
//   });
// };

const getSinlgeNotes = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({
        message: `Note with id: ${id} not found`,
      });
    }

    res.status(200).json({
      data: note,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching note", error: error.message });
  }
};

//create note
const createNote = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(400)
      .json({ message: "Please provide both title and content for the note." });
  }

  const newNote = await Note.create({
    title,
    content,
  });
  res.status(201).json({
    message: "Note created successfully",
    data: newNote,
  });
};


const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const [updated] = await Note.update(
      { title, content },
      {
        where: { id: parseInt(id) },
      }
    );

    if (!updated) {
      return res.status(404).json({ message: "Note not found" });
    }

    const updatedNote = await Note.findByPk(id);
    res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating note", error: error.message });
  }
};

//delete note
// const deleteNote = (req, res) => {
//   const { id } = req.params;
//   const noteIndex = notes.findIndex((note) => note.id === parseInt(id));

//   if (noteIndex === -1) {
//     return res.status(404).json({ message: "Note not found" });
//   }

//   notes.splice(noteIndex, 1);
//   res.status(200).json({
//     message: "Note deleted successfully",
//   });
// };

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Note.destroy({
      where: { id: parseInt(id) },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting note", error: error.message });
  }
};

module.exports = {
  getNotes,
  getSinlgeNotes,
  createNote,
  updateNote,
  deleteNote,
};
