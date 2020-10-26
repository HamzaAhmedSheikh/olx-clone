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
         
        <img src={bannerImage} className="banner" alt='banner image' />        
         
     </section>  
    )
   } 
 }
  
  export default Banner;