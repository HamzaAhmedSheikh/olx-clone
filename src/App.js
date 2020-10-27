import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Sell from './Pages/Sell'
import Category from './Pages/Category'
import Add from './Pages/Add'
import UserAdds from './Pages/UserAdds'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/sell'>
              <Sell/>
          </Route>
          <Route exact path='/category'>
              <Category/>
          </Route>
          <Route path='/add_users/'>
              <UserAdds/>
          </Route>
          <Route path='/add/'>
              <Add/>
          </Route>
          <Route path='/notfound'>
              <NotFound/>
          </Route>
        </Switch>
      </Router>
      
    </div>

  );
}

export default App;


// import React from 'react';
// import './Props.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbars from './components/header/Header'
// import MainWrapper from "./components/main/MainContent";
// import PassingData from "./components/render-component/Passing";
// import Footer from './components/footer/MainFooter';
// import Header from './Component/Header'


// const MAINPAGE = () => {
//   return (
//     <>
//       <Navbars />
//       <MainWrapper />
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


// function App() {
//   return (
//     <Router>
//       <Switch>
//       <Route exact path="/" component={MAINPAGE} />      
//       <Route path="/cards/:detail" component={componentPage} />  
//       </Switch>
//     </Router>    
//   );
// }

// export default App;
