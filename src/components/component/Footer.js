import React from 'react';
import PlayStore from '../../images/playstore.webp';
import AppStore from '../../images/appstore.webp';
import FooterBanner from '../../images/phone-app.webp';
import AppStoreOne from '../../images/appstore1.webp';
import PlayStoreOne from '../../images/playstore1.webp';

import { Link } from 'react-router-dom';

 function Footer () {
    return(
     <>          
      <section>         
       
        <div className="app-ribbon flex aic">
         <div className="img">
           <img src={FooterBanner} className="bl" />
        </div> 

        <div className="meta">
          <h2 className="title fontb s30 color"> TRY THE OLX APP </h2>
          <h2 className="slogan font s18 color"> Buy, sell and find just about anything using the app on your mobile. </h2>
        </div>

        <div className="links">
          <h2 className="title fontb s20 color"> GET YOUR APP TODAY </h2>
          <div className="flex as">
            <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665" className="noul bl"> <img src={AppStore} alt="appstore" /> </a>  
            <a href="https://play.google.com/store/apps/details?id=com.olx.pk" className="noul bl"> <img src={PlayStore} alt="playstore" /> </a>            
          </div>
        </div>
      </div>



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

      <div className="block flex flex-col">
        <h2 className="title s16 fontb color"> FOLLOW US </h2>  
        <div className="fff">
        <Link to='/' className="noul noulh font s14 color"> <i className="fab fa-facebook"></i> </Link>
        <Link to='/' className="noul noulh font s14 color"> <i className="fab fa-twitter"></i> </Link>
        <Link to='/' className="noul noulh font s14 color"> <i className="far fa-play-circle"></i> </Link>   
        <Link to='/' className="noul noulh font s14 color"> <i className="fab fa-instagram"></i> </Link>      
        </div> 

        <div className="links">
          <h2 className="title fontb s20 color"></h2>
          <h2 className="title fontb s20 color"></h2>
          <div className="flex as">
            <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665" className="noul bl"> <img src={AppStoreOne} alt="appstore" /> </a>  
            <a href="https://play.google.com/store/apps/details?id=com.olx.pk" className="noul bl"> <img src={PlayStoreOne} alt="playstore" /> </a>            
          </div>
        </div>
      </div> 
    </div> 


    <div className="footerb flex">
      <h2 className="cfff font s14"> Other Countries India - South Africa - Indonesia </h2> 
      <h2 className="r cfff font s14"> Free Classifieds in Pakistan. © 2006-2020 OLX </h2> 
    </div>
     </section> 
     </>  
   )
 }

 export default Footer;
