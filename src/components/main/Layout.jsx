import React, { Component, useState } from "react";
import Cards from "./Cards";
import cardsData from "./cardsData";
import "./wrapper.css";
import { Link } from "react-router-dom";

 const Layout = () => {
  return (
   <div className="bigBox">
    { cardsData.map((value, index) => {
       return (
        <div className="components">
          <Link
            className="active_NavLink"
            to={
                "/cards/" +
                value.details
                  .split(" ")
                  .join("")
                  .slice(0, value.details.length - value.details.length / 2)
                }
          >

          <Cards
            key={index}
            imgSrc={value.imgSrc}
            price={value.price}
            title={value.title}
            details={value.details}
            area={value.area}
            upload={value.upload}
           />
          </Link>
        </div>
       );
     })}
  </div>
 );
};

export default Layout;