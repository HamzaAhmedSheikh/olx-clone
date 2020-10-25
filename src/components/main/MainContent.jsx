import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from './Banner'
import Layout from './Layout';
import Bottom from "./Bottom";
import "./wrapper.css";


class MainWrapper extends React.Component {
    constructor() {
      super();
   }
  
  render() {
    return (
      <>
       <Banner />
       <Layout />

        <div className="load_btn">
          <button> Load More </button>
        </div>
        <Bottom />
       </>
     );
    }
  }
  export default MainWrapper;