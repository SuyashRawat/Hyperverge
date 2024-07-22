import logo from './logo.svg';
import './App.css';
import State from './state/State';

function App() {
  return (
    <>
    <State>
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
      </State>
    </>
  );
}

export default App;
