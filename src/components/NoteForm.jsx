// Programmer : yogi maulana
// No HP : 082211114147
// GITHUB : https://github.com/yogi-maulana-dev/
// LINKED : https://www.linkedin.com/in/yogi-maulana-0249a8131/
import React, { useState, useEffect } from "react";

const NoteForm = ({ onSave, note }) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [body, setBody] = useState(note ? note.body : "");
  const [remainingChars, setRemainingChars] = useState(50);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
      setRemainingChars(50 - note.title.length);
    }
  }, [note]);

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
      setRemainingChars(50 - newTitle.length);
    } else {
      alert("Judul catatan tidak boleh lebih dari 50 karakter");
    }
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && body.trim()) {
      onSave({ id: note ? note.id : null, title, body });
      setTitle("");
      setBody("");
      setRemainingChars(50);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-white">
          Judul
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="mt-2 p-2 w-full bg-gray-700 text-white rounded-md"
          placeholder="Masukkan judul catatan..."
        />
        <p className="text-xs text-gray-400 mt-1">
          {remainingChars} karakter tersisa
        </p>{" "}
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block text-sm font-medium text-white">
          Isi Catatan
        </label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
          className="mt-2 p-2 w-full bg-gray-700 text-white rounded-md"
          placeholder="Masukkan isi catatan..."
        />
      </div>
      <button type="submit" className="py-2 px-4 bg-blue-600 rounded-md">
        Simpan
      </button>
    </form>
  );
};

export default NoteForm;
