import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ProductCard from "./ProductCard";


class Product extends Component {
  render() {
    return (
      <div className="container-fluid productMain">
        <div className="row">
          <div className="col">
            <ProductCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Product;