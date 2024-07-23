import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import State from './state/State';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
    {/* <State> */}
      hello
      <State>
        <Router>
        <Routes>
            {/* <Route exact path="/About" element={<About />} /> */}
            <Route exact path="/home" element={<Home />} />
            {/* <Route exact path="/login" element={<Login showAlert={showAlert} />} /> */}
            {/* <Route exact path="/ssignup" element={<Ssignup showAlert={showAlert} />} /> */}
            {/* <Route exact path="/edit-note/:id" element={<Edit showAlert={showAlert} />} /> */}
          </Routes>
        </Router>
      </State>
        {/* <div className="App">
          <Navbar />
          {!isCollapsed && <div style={{ marginBottom: '100px' }}></div>}
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/About" element={<About />} />
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/ssignup" element={<Ssignup showAlert={showAlert} />} />
            <Route exact path="/edit-note/:id" element={<Edit showAlert={showAlert} />} />
          </Routes>
        </div> */}
      {/* </State> */}
    </>
  );
}

export default App;
