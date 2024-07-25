import logo from './logo.svg';
import './App.css';
// import Home from "./Components/Home"
import State from './state/State';
import Home from './Components/Home'
import GoogleSlides from './Components/GoogleSlides';
import PomodoroTimer from './Components/PomodoroTimer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import GoogleMeet from './Components/Meet';
import ToDoList from './Components/ToDo';
import HealthTracker from './Components/HealthTracker';
function App() {
  return (
    <>
    <div style={{display:'flex'}}>
     <GoogleSlides embedUrl="https://docs.google.com/presentation/d/e/2PACX-1vSHU5lCgMJ3Akb8ovraVAAX4v31zv9WtbDghTsP2Om2iLCHxj4hxwq0oGrIZ4CtgQgUcn7Dbetzxu6l/embed?start=false&loop=false&delayms=3000"/>


     <PomodoroTimer />
     </div>
     <div>
      
     <GoogleMeet />
     </div>
     <ToDoList/>
     <HealthTracker/>
    {/* <State> */}
    <Router>
          <div className="App">
         
          <Routes>
            {/* <Route exact path="/About" element={<About />} /> */}
            {/* <Route exact path="/" element={<Home/>} /> */}
            {/* <Route exact path="/login" element={<Login showAlert={showAlert} />} /> */}
            {/* <Route exact path="/ssignup" element={<Ssignup showAlert={showAlert} />} /> */}
            {/* <Route exact path="/edit-note/:id" element={<Edit showAlert={showAlert} />} /> */}
          </Routes>
        </div> 
        </Router>
      {/* </State> */}
    </>
  );
}

export default App;
