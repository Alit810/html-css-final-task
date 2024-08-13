const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

function queryData(note, sort, filter, status) {
  let filteredNotes = [...note];

  if (filter) {
    filteredNotes = filteredNotes.filter((note) =>
      note.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (status) {
    const isComplete = status === "completed";
    filteredNotes = filteredNotes.filter(
      (note) => note.completed === isComplete
    );
  }

  if (sort === "latest") {
    filteredNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else {
    filteredNotes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  return filteredNotes;
}

const result = queryData(notesList, "", "study", "false");
console.log(result);
