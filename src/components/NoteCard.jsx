// Programmer : yogi maulana
// No HP : 082211114147
// GITHUB : https://github.com/yogi-maulana-dev/
// LINKED : https://www.linkedin.com/in/yogi-maulana-0249a8131/
import React from "react";

const NoteCard = ({ note, onDelete, onArchive, onEdit, isArchived }) => {
  return (
    <div className="border rounded bg-gray-800 p-4 shadow text-white">
      <h3 className="font-bold text-lg truncate">{note.title}</h3>
      <p className="text-sm text-gray-400 mb-2">{note.date}</p>
      <p className="mb-4">{note.body}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
        >
          Delete
        </button>
        {!isArchived && (
          <button
            onClick={() => onEdit(note)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onArchive(note.id)}
          className={`py-1 px-3 rounded ${
            isArchived
              ? "bg-green-500 hover:bg-green-600"
              : "bg-yellow-500 hover:bg-yellow-600"
          } text-white`}
        >
          {isArchived ? "Unarchive" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
