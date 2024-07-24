import React, { useState } from "react";
import "./App.css";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    setNotes([...notes, input]);
    setInput("");
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Notes Application</h1>
      </header>
      <main>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your note here..."
          />
          <button onClick={addNote}>Add Note</button>
        </div>
        <div className="notes-grid">
          {notes.map((note, index) => (
            <Note key={index} text={note} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

