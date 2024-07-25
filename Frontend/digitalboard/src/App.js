import logo from './logo.svg';
import './App.css';
// import Home from "./Components/Home"
import State from './state/State';
import SpotifyAuth from './Components/SpotifyAuth';
import Home from './Components/Home'
import GoogleSlides from './Components/GoogleSlides';
import PomodoroTimer from './Components/PomodoroTimer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import GoogleMeet from './Components/Meet';
import ToDoList from './Components/ToDo';
import HealthTracker from './Components/HealthTracker';
import AppLinks from './Components/AppLinks';
import SpotifyPlayer from './Components/SpotifyPlayer';
function App() {
  return (
    <>
    
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'black',color:'white',
      position:'fixed',width:'100%'
    }}>
      <h1>Hyperverge</h1>
    </div>



    
    <Router>
         
          <Routes>
            {/* <Route exact path="/About" element={<About />} /> */}
            {/* <Route exact path="/" element={<Home/>} /> */}
            <Route exact path="/" element={<Home/>} />
           
            {/* <Route exact path="/login" element={<Login showAlert={showAlert} />} /> */}
            {/* <Route exact path="/ssignup" element={<Ssignup showAlert={showAlert} />} /> */}
            {/* <Route exact path="/edit-note/:id" element={<Edit showAlert={showAlert} />} /> */}
          </Routes>
        {/* </div>  */}
        </Router>
      {/* </State> */}
    </>
  );
}

export default App;
