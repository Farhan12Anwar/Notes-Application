import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';

const Main = () => {
  const [notes, setNotes] = useState([]); // Initialize notes state here

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home notes={notes} setNotes={setNotes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
