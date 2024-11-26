// Programmer : yogi maulana
// No HP : 082211114147
// GITHUB : https://github.com/yogi-maulana-dev/
// LINKED : https://www.linkedin.com/in/yogi-maulana-0249a8131/
import React, { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";
import NoteForm from "../components/NoteForm";
import { getInitialData, showFormattedDate } from "../utils/data";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    const initialNotes = getInitialData();
    setNotes(initialNotes);
  }, []);

  const handleDelete = (id) => {
    if (showArchived) {
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
    } else {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  const handleArchive = (id) => {
    const noteToArchive = notes.find((note) => note.id === id);
    if (noteToArchive) {
      setNotes(notes.filter((note) => note.id !== id));
      setArchivedNotes([
        ...archivedNotes,
        { ...noteToArchive, archived: true },
      ]);
    }
  };

  const handleUnarchive = (id) => {
    const noteToUnarchive = archivedNotes.find((note) => note.id === id);
    if (noteToUnarchive) {
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
      setNotes([...notes, { ...noteToUnarchive, archived: false }]);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSave = (newNote) => {
    if (newNote.id) {
      setNotes(
        notes.map((note) => (note.id === newNote.id ? { ...newNote } : note))
      );
    } else {
      setNotes([
        ...notes,
        {
          ...newNote,
          id: Date.now(),
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
    setSelectedNote(null);
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
  };

  const filteredNotes = showArchived
    ? archivedNotes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : notes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="text-center text-2xl font-bold mb-6">
        Aplikasi Cacatan Yogi Maulana
      </header>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setShowArchived(false)}
          className={`py-2 px-4 rounded ${
            !showArchived ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          Catatan Aktif
        </button>
        <button
          onClick={() => setShowArchived(true)}
          className={`py-2 px-4 rounded ${
            showArchived ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          Arsip
        </button>
      </div>
      {!showArchived && <NoteForm onSave={handleSave} note={selectedNote} />}
      <div className="mb-4">
        <SearchBar value={searchQuery} onSearch={handleSearch} />
      </div>
      {filteredNotes.length === 0 ? (
        <div className="text-center text-gray-500">Tidak ada catatan</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={{ ...note, createdAt: showFormattedDate(note.createdAt) }}
              onDelete={handleDelete}
              onArchive={showArchived ? handleUnarchive : handleArchive}
              onEdit={!showArchived ? handleEdit : null}
              isArchived={showArchived}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesApp;
