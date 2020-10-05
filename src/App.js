import React from 'react';
import './Props.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} />      
    </Router>    
  );
}

export default App;
