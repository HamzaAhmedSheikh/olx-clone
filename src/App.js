import React from 'react';
import './Props.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from './components/Home'
// import Header from './components/Header'
import Footer from './components/component/Footer';
import Navbars from './components/component/Navbar';
import Banner from './components/component/Banner';
import ProductContextProvider from './Global/ProductContext';
import Products from './components/component/Products';

function App() {
  return (
    <Router>
      <Navbars />
      <Banner />
      <ProductContextProvider>
        <div className='containers'>
         <Route path="/" component={Products} />  
        </div>
      </ProductContextProvider>
      {/* <Route path="/" component={HomePage} />       */}
      <Footer />      
    </Router>    
  );
}

export default App;
