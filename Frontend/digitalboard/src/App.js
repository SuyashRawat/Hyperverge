import React from 'react';
import logo from './logo.svg';
import './App.css';
import State from './state/State';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    // <State>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route exact path="/About" element={<About />} /> */}
            <Route path="/home" element={<Home />} />
            {/* <Route exact path="/login" element={<Login showAlert={showAlert} />} /> */}
            {/* <Route exact path="/ssignup" element={<Ssignup showAlert={showAlert} />} /> */}
            {/* <Route exact path="/edit-note/:id" element={<Edit showAlert={showAlert} />} /> */}
          </Routes>
        </div> 
      </Router>
    //  </State>
  );
}

export default App;
