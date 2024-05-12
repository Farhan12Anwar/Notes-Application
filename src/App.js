import React, { useState, useEffect } from 'react';
import './App.css';
import { FiTrash2, FiPlus } from 'react-icons/fi'; // For Feather icons
import { MdColorLens } from 'react-icons/md'; // For Material Design icons

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes && storedNotes.length > 0) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() !== '') {
      const updatedNotes = [...notes, { text: newNote, color: 'yellow' }];
      setNotes(updatedNotes);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleColorChange = (index, color) => {
    const updatedNotes = [...notes];
    updatedNotes[index].color = color;
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Notes App</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className="add-note" onClick={addNote}><FiPlus /></button>
        <input
          className='search-bar'
          type="text"
          placeholder="Search notes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="notes-list">
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            className="note"
            style={{ backgroundColor: note.color }}
          >
            <span className="note-text">{note.text}</span>
            <div className="note-actions">
              <button onClick={() => deleteNote(index)}><FiTrash2 /></button>
              <div className="colors">
                <span
                  className="color yellow"
                  onClick={() => handleColorChange(index, 'yellow')}
                ></span>
                <span
                  className="color green"
                  onClick={() => handleColorChange(index, 'green')}
                ></span>
                <span
                  className="color blue"
                  onClick={() => handleColorChange(index, 'blue')}
                ></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
