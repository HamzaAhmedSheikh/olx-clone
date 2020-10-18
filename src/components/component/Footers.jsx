import React, { Component } from 'react';
import Play from '../../images/playstore1.webp';
import App from '../../images/appstore1.webp';
import FooterBanner from '../../images/phone-app.webp';
import PlayStore from '../../images/playstore.webp';
import AppStore from '../../images/appstore.webp';

import { Link } from 'react-router-dom';


 class Footers extends Component {
    render() {
      return (
       <footer>
        <button className="load-more fontb cfff anim s20"> Load More </button>  
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

        {/* Footer Part-2 */}

        <div className="footer flex">        
         <div className="container foot">           
          <div className="col-md-3 block flex flex-col">
            <h2 className="title s16 fontb color"> POPULAR CATEGORIES </h2> 
            <p> <Link to='/' className="noul noulh font s14 color"> Cars </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> Flats for rent </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> Jobs </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> Mobile Phones </Link> </p>
          </div> 

          <div className="col-md-3 block flex flex-col">
            <h2 className="title s16 fontb color"> TRENDING SEARCHES </h2> 
            <p> <Link to='/' className="noul noulh font s14 color"> Bikes </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> Watches </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> Books </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> Dogs </Link> </p>           
          </div>         

          <div className="col-md-3 block flex flex-col">
            <h2 className="title s16 fontb color"> ABOUT US </h2> 
            <p> <Link to='/' className="noul noulh font s14 color"> About OLX Group </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> OLX Blog </Link> </p>
            <p>  <Link to='/' className="noul noulh font s14 color"> Contact Us </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> OLX for Businesses </Link>  </p>              
          </div>

          <div className="col-md-3 block flex flex-col">
            <h2 className="title s16 fontb color"> OLX </h2>     
            <p> <Link to='/' className="noul noulh font s14 color"> Help </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> Sitemap </Link> </p>
            <p> <Link to='/' className="noul noulh font s14 color"> Legal and Privacy information </Link>  </p>
          </div>

          <div className="col-md-3 block">
            <h2 className="title s16 fontb color"> OLX </h2>     
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="far fa-play-circle"></i>
            <i class="fab fa-instagram"></i>

            <p> <img src={Play} alt="play-store" /> </p> 
            <p> <img src={App} alt="app-store" /> </p> 
          </div>
         </div> 
         
       </div>     
          
                  {/* Footer Part-3 */}

       <div className="footerb flex">
        <h2 className="cfff font s14"> Other Countries India - South Africa - Indonesia </h2> 
        <h2 className="r cfff font s14"> Free Classifieds in Pakistan. © 2006-2020 OLX </h2> 
       </div>
      </footer> 
      )  
    }
 }

 export default Footers;