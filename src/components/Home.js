import React, {useEffect, useState } from 'react'
import AdItem from './AdItem';

import PhoneApp from '../images/phone-app.webp'
import PlayStore from '../images/playstore.webp'
import AppStore from '../images/appstore.webp'

function HomePage() {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
     if(loading) {
       let _list = [];    
       for(let i = 0; i < 20; i++) {
         _list.push(<AdItem placeholder={true} />);
      }
       setList(_list);
    }
   }, list) 

  

    return(
     <> 
      <div className="home-page">
       <div className="ad-list flex">
        {list}
       </div>         
       <button className="load-more fontb c333 anim s20"> Load More </button> 
      </div>

      <div className="app-ribbon flex aic">
        <div className="img">
          <img src={PhoneApp} className="bl" />
        </div> 

        <div className="meta">
          <h2 className="title fontb s30 color"> TRY THE OLX APP </h2>
          <h2 className="slogan font s18 color"> Buy, sell and find just about anything using the app on your mobile. </h2>
        </div>

        <div className="links">
          <h2 className="title fontb s20 color"> GET YOUR APP TODAY </h2>
          <div className="flex as">
            <a href="#" className="noul bl"> <img src={PlayStore} alt="playstore" /> </a>
            <a href="#" className="noul bl"> <img src={AppStore} alt="appstore" /> </a>
          </div>
        </div>
      </div>
    </>
    )
}

export default HomePage;