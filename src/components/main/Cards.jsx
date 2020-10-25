import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as materialIcon from "@material-ui/icons";
import "./wrapper.css";

class Cards extends Component {
    constructor() {
        super();
   }  

  render() {
    return (
      <div className="card">
       <div className="hearticon-box">
        <materialIcon.FavoriteBorder />   
       </div>  

       <div className="img-box">
        <img src={this.props.imgSrc} alt="image" />
       </div>

       <div className="content-box">
         <h1> {this.props.price} </h1>
         <h4> {this.props.title} </h4>
         <p>  {this.props.details} </p>
       </div>

       <div className="area-and-time">
         <p> {this.props.area} </p>
         <p> {this.props.upload} </p>
       </div>
      </div>   
    )  
  } 
}

 export default Cards;