import React from "react";
import * as materialIcon from "@material-ui/icons";
import "./render.css";


  const MainComponent = (props) => {
   return (
    <div className="MainComponent">
     <div className="underSuper">
      <div className="img_cupboard">
        <img src={props.imgSrc} alt="component image" />
      </div>

      <div className="detail_cupboard">
       <div className="price_cupboard">
        <div className="price">
         <h1> {props.price} </h1>
          <div className="logos">
            <materialIcon.Share />
            <materialIcon.FavoriteBorder />
          </div>
        </div>

           <h1> {props.title} </h1>
           <h2> {props.description} </h2>

          <div className="area_city">
            <p>{props.area}</p>
            <p>{props.postingDate}</p>
          </div>
        </div>


        <div className="description_cupboard">
          <h1>Seller description</h1>

         <div className="bioData">
           <div className="first">
              <img
                src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/51-512.png"
                alt="simple avatar"
              />

              <div className="namess">
                <h3> Ahmed </h3>
                <p>Member since Mar 2019</p>
              </div>
            </div>

            <div className="second">
               <materialIcon.KeyboardArrowRight />
            </div>            
          </div>


          <button> Chat with Seller </button>
          <div className="phone_area">
            <materialIcon.Call />
            <p>*** ****** ***</p>
            <a>Show Number</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
    
   


 export default MainComponent;