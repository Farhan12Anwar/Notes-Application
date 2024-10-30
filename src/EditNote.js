import React, { useState } from 'react';

const EditNote = ({ note, index, setNotes, onClose }) => {
  const [text, setText] = useState(note.text);
  const [color, setColor] = useState(note.color || '#f2f2b4');

  const handleSave = () => {
    // Update note text and color
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = { ...note, text, color };
      return updatedNotes;
    });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Note</h2>
        <textarea
          className="edit-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Edit your note"
        />
        <div className="color-picker">
          <label>Choose Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditNote;
