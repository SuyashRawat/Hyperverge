import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SpotifyAuth from './Components/SpotifyAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<SpotifyAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
