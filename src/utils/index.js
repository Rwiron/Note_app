const notes = [
  { id: 1, title: "Note 1", content: "This is the content of note 1." },
  { id: 2, title: "Note 2", content: "This is the content of note 2." },
];

const addNote = (title, content) => {
  const newNote = {
    id: notes.length + 1,
    title,
    content,
  };
  notes.push(newNote);
  return newNote;
};

module.exports = { notes, addNote };
