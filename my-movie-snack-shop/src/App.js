import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className='navbar'>

      </div>
       
    </div>
    </Router>
  );
}

export default App;
