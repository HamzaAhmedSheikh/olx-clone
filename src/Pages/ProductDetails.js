import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FormHeader } from "./postAdd";
import { database } from '../Pages/Login'
import { Link } from "react-router-dom";

class DetailForm extends Component {
  constructor() {
    super();
    var today = new Date(),
      date = today.getDate() + "-" + (today.getMonth() + 1);

    this.state = {
      productCategory: "",
      productTitle: "",
      productDetail: "",
      productPrice: "",
      productImg: "",
      location: "",
      ownerName: "",
      ownerContact: "",
      date: date,
    };
    console.log(this.state.date);
  }

  postAdd = () => {
    if (
      this.state.productCategory === "" ||
      this.state.productTitle === "" ||
      this.state.productDetail === "" ||
      this.state.productImg === "" ||
      this.state.productPrice === "" ||
      this.state.location === "" ||
      this.state.ownerName === "" ||
      this.state.ownerContact === ""
    ) {
      alert("input all fields");
    } else {
      database.ref("/").child("post").push({
        productCategory: this.state.productCategory,
        productTitle: this.state.productTitle,
        productDetail: this.state.productDetail,
        productPrice: this.state.productPrice,
        productImg: this.state.productImg,
        location: this.state.location,
        ownerName: this.state.ownerName,
        ownerContact: this.state.ownerContact,
        date: this.state.date,
      });
      alert("submitted successfully");
    }
  };

  render() {
    return (
      <div>
        <FormHeader link="/PostYourAdd" />
        <div className="container">
          <div className="row addHeading">
            <h5>POST YOUR AD</h5>
            <p className="text-center">
              {" "}
              <b> OLX </b> Pakistan Largest Market Place{" "}
            </p>
          </div>

          <div className="row Form">
            <div className="Details">
              <h5>ENTER CETOGARY</h5>
              <input
                required
                onChange={(e) =>
                  this.setState({ productCategory: e.target.value })
                }
                type="text"
              />
            </div>
            <div className="Details">
              <h5>INCLUDE SOME DETAILS</h5>
              <span>Condition *</span>
              <button className="conditionBtn">New</button>
              <button className="conditionBtn">Used</button>
              <div>
                <span>Add Title</span>
                <input
                  required
                  value={this.state.productTitle}
                  onChange={(e) =>
                    this.setState({ productTitle: e.target.value })
                  }
                  type="text"
                />
              </div>
              <div>
                <span>Description</span>
                <textarea
                  required
                  value={this.state.productDetail}
                  onChange={(e) =>
                    this.setState({ productDetail: e.target.value })
                  }
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="Details">
              <h5>SET PRICE</h5>
              <span>Price *</span>
              <input
                required
                value={this.state.productPrice}
                onChange={(e) =>
                  this.setState({ productPrice: e.target.value })
                }
                type="text"
              />
            </div>

            <div className="Details">
              <h5>UPLOAD PICTURE</h5>
              <span>Enter URL of Picture *</span>
              <input
                required
                value={this.state.productImg}
                onChange={(e) => this.setState({ productImg: e.target.value })}
                type="text"
              />
            </div>

            <div className="Details">
              <h5>CONFORMATION YOUR LOCATION</h5>
              <input
                required
                value={this.state.location}
                onChange={(e) => this.setState({ location: e.target.value })}
                type="text"
              />
            </div>

            <div className="Details">
              <h5>ENTER YOUR DETAILS</h5>
              <div>
                <img alt="this is an image" />
                <span>Name *</span>
                <input
                  required
                  value={this.state.ownerName}
                  onChange={(e) => this.setState({ ownerName: e.target.value })}
                  type="text"
                />
              </div>
              <h5>VARIFY YOUR ACCOUNT</h5>
              <span>Mobile Phone Number *</span>
              <input
                required
                value={this.state.ownerContact}
                onChange={(e) =>
                  this.setState({ ownerContact: e.target.value })
                }
                type="text"
              />
            </div>

            <div className="Details">
              <Link to="/">
                <button onClick={() => this.postAdd()} className="postNowBtn">
                  Post Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailForm;
