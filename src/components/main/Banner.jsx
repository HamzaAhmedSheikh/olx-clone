import React, { Component } from "react";
import bannerImage from "../../images/hero_bg.jpg";
import "./wrapper.css";

class Banner extends Component {
    constructor() {
      super();
   }

  render() {
    return (
      <section>
       <div className="banner">
        <div className="bannerImage"></div>   
       </div>         
     </section>  
    )
   } 
 }
  
  export default Banner;