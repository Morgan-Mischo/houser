import React from 'react';
import './App.css';
import Header from './Components/Header/Header'; 
import { HashRouter as Router } from 'react-router-dom'; 
import { Link } from "react-router-dom";
import routes from './routes'; 

function App() {
  return (
    <Router>
    <div className="App">
      < Header />
      {routes}
      <Link to="/"> Dashboard </Link>
      <Link to="/wizard"> Wizard </Link>
    </div>
    </Router>
  );
}

export default App;
