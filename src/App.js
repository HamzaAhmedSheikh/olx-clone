import React from 'react';
import './Props.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} />      
      <Footer />
    </Router>    
  );
}

export default App;
