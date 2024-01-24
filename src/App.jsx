import "./App.css";
import { NotesProvider } from "./context/NotesContext";
import NotesForm from "./notes/NotesForm";
import NotesList from "./notes/NotesList";

function App() {
  return (
    <div className="App">
      <NotesProvider>
        <NotesForm />
        <NotesList />
      </NotesProvider>
    </div>
  );
}

export default App;
