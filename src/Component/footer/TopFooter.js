import React from "react";
import * as materialIcon from "@material-ui/icons";
import "./footer.css";

const TopFooter = () => {
   return (
    <div className="main_box">
     <div className="main_layer">
      <div className="popular"> 
       <h2> POPULAR CATEGORIES </h2>
        <p> Flats for Rent </p>
        <p> Jobs </p>
        <p> Mobile Phones </p>
      </div>

      <div className="trending">
        <h2>TRENDING SEARCHES</h2>
         <p>Bikes</p>
         <p>Watches</p>
         <p>Books</p>
         <p>Dogs</p>
      </div>

      <div className="about">
        <h2>ABOUT US</h2>
         <p>About OLX</p>
         <p>OlX Blog</p>
         <p>Contact Us</p>
         <p>OlX for Businesses</p>
      </div>

      <div className="olx">
        <h2>OLX</h2>
          <p> Help </p>
          <p>Sitemap</p>
          <p>Legal & Privacy information</p>
      </div>

      <div className="follow">    
        <h2>FOLLOW US</h2>
        <div className="social_icons">
         <materialIcon.Facebook />
         <materialIcon.Twitter />
         <materialIcon.PlayArrow />
         <materialIcon.Instagram />
      </div>

      <div className="links_icon">
        <a href="https://itunes.apple.com/app/olx-pakistan/id1119081665?mt=8">
          <img src="https://statics.olx.com.pk/external/base/img/appstore.webp" alt="" />
        </a>

        <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">
           <img src="https://statics.olx.com.pk/external/base/img/playstore.webp" alt="" />
        </a>
         
      </div>
   </div>
  </div>
 </div> 
     
  ) 
}

 export default TopFooter;