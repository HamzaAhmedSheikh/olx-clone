import React from 'react';
// import './Props.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from './components/Home'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Navbar from './components/component/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Route path="/" component={HomePage} />       */}
      {/* <Footer /> */}      
    </Router>    
  );
}

export default App;
