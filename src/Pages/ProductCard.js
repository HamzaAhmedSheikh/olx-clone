import React, { Component } from "react";
import { Link } from "react-router-dom";
import { database } from '../Pages/Login';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    database.ref("post").on("value", (data) => {        
      let product = [];
      data.forEach((list) => {
        product.push(list.val());
      });      
      this.setState({ product: product });
   
    });
  }

  render() {      
    var rs = "RS ";
    return (
      <div className="col">
        <div className="row">
          {this.state.product.map((data, i) => (             
            <Link to="/add/">
                
              {" "}
              <div className="card">
                <div className="cardImage">
                  <img src={data.image} alt="" />
                </div>
                <div className="cardContent">
                  <div className="prductDetails">
                    <span className="ProductPrice">Rs {data.price}</span>
                    <span className="ProductName">{data.title}</span>
                  </div>
                  <div className="cardfooter">
                    <span className="ProductLocation">{data.location}</span>
                    <span className="UploadDate">{data.dates}</span>
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