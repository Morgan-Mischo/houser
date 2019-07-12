import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'; 
import Header from './Components/Header/Header'; 
import Wizard from './Components/Wizard/Wizard'; 
import { HashRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="App">
      < Dashboard />
      < Header />
      < Wizard />
    </div>
    </Router>
  );
}

export default App;
