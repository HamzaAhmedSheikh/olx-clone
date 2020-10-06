import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

function Footer() {
  return (
   <>   
    <div className="footer flex">
      <div className="block flex flex-col">
        <h2 className="title s16 fontb color"> POPULAR CATEGORIES </h2>  
        <Link to='/' className="noul noulh font s14 color"> Cars </Link>
        <Link to='/' className="noul noulh font s14 color"> Flats for rent </Link>
        <Link to='/' className="noul noulh font s14 color"> Jobs </Link>
        <Link to='/' className="noul noulh font s14 color"> Mobile Phones </Link>             
      </div>  

      <div className="block flex flex-col">
        <h2 className="title s16 fontb color"> TRENDING SEARCHES </h2>  
        <Link to='/' className="noul noulh font s14 color"> Bikes </Link>
        <Link to='/' className="noul noulh font s14 color"> Watches </Link>
        <Link to='/' className="noul noulh font s14 color"> Books </Link>
        <Link to='/' className="noul noulh font s14 color"> Dogs </Link>             
      </div>  

      <div className="block flex flex-col">
        <h2 className="title s16 fontb color"> ABOUT US </h2>  
        <Link to='/' className="noul noulh font s14 color"> About OLX Group </Link>
        <Link to='/' className="noul noulh font s14 color"> OLX Blog </Link>
        <Link to='/' className="noul noulh font s14 color"> Contact Us </Link>
        <Link to='/' className="noul noulh font s14 color"> OLX for Businesses </Link>             
      </div>  

      <div className="block flex flex-col">
        <h2 className="title s16 fontb color"> OLX </h2>  
        <Link to='/' className="noul noulh font s14 color"> Help </Link>
        <Link to='/' className="noul noulh font s14 color"> Sitemap </Link>
        <Link to='/' className="noul noulh font s14 color"> Legal and Privacy information </Link>         
      </div>  
    </div> 

    <div className="footerb flex">
      <h2 className="cfff font s14"> Other Countries India - South Africa - Indonesia </h2> 
      <h2 className="r cfff font s14"> Free Classifieds in Pakistan. © 2006-2020 OLX </h2> 
    </div>
   </>        
  )
}


export default Footer
