import React, { Component } from "react";
import { database } from "../Pages/Login";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {    
      database
      .ref("post")
      .on("value", (data) => {
        let product = [];
        data.forEach((list) => {
          product.push(list.val());          
        });        
        this.setState({ product: product });
        console.log(product.productImg);
      });
  }

  render() {
    var rs = "RS ";
    return (
      <div className="col">
        <div className="row">
          {this.state.product.map((v, i) => (
            <Link to="/add/">
              {" "}
              <div className="card">
                <div className="cardImage">
                  <img src={v.productImg} alt="" />
                </div>
                <div className="cardContent">
                  <div className="prductDetails">
                    <span className="ProductPrice">Rs {v.productPrice}</span>
                    <span className="ProductName">{v.productTitle}</span>
                  </div>
                  <div className="cardfooter">
                    <span className="ProductLocation">{v.location}</span>
                    <span className="UploadDate">{v.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
export default ProductCard;
