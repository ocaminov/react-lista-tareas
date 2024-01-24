import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "../context/NotesContext";

function NotesList() {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      <p style={{ textAlign: "right" }}>
        Tienes {notes.length} notas guardadas
      </p>
      {notes.map((note) => (
        <Note key={note.id} title={note.title} message={note.message} id={note.id} />
      ))}
    </div>
  );
}

export default NotesList;
