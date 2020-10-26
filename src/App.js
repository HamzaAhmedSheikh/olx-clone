import React from 'react';
import './Props.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from './components/header/Header'
import MainWrapper from "./components/main/MainContent";
import PassingData from "./components/render-component/Passing";
import Footer from './components/footer/MainFooter';
import Header from './Component/Header'


// const MAINPAGE = () => {
//   return (
//     <>
//       <Navbars />
//       <Header />
//       <Footer />
//     </>
//   );
// };

// const componentPage = () => {
//   return (
//     <>
//       <Navbars />
//       <PassingData />
//       <Footer />
//     </>
//   );
// };


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Header} />      
      {/* <Route path="/cards/:detail" component={componentPage} />   */}
      </Switch>
    </Router>    
  );
}

export default App;
