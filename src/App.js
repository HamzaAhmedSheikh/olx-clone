import React from 'react';
import './Props.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import HomePage from './components/Home'
// import Header from './components/Header'
// import Footer from './components/component/Footer';
import Footer from './components/footer/MainFooter';
// import Navbars from './components/component/Navbar';
import Navbars from './components/header/Header'
import MainWrapper from "./components/main/MainContent";
// import Banner from './components/component/Banner';
import ProductContextProvider from './Global/ProductContext';
import Products from './components/component/Products';
// import ContactDataProvider from './components/Context/ProductData'
// import Product from './components/component/Test'
// import ProductForm from './components/component/ProductForm'
// import TodoInput from './components/component/TodoInput' 
// import TodoList from './components/component/TodoList';
import PostYourAds from './components/component/PostAds'

const MAINPAGE = () => {
  return (
    <>
      <Navbars />
      <MainWrapper />
      <Footer />
    </>
  );
};


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={MAINPAGE} />        
      </Switch>
    </Router>    
  );
}

export default App;
