import React, { Component } from "react";
import "./header.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as materialIcon from "@material-ui/icons";
import OLX_LOGO from '../../images/olx-logo.png';
import * as allData from "./headerData";
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
      super();
      this.state = {
        hideShow: { display: "none" },
        nav: true,
        rotate: {},
      };
    }
  
    mainHideShowFunc = () => {
      if (this.state.nav == true) {
        this.setState({
          hideShow: { paddingTop: "20px" },
          nav: false,
          rotate: { transform: "rotate(180deg)" },
        });
      } else {
        this.setState({
          hideShow: { display: "none" },
          nav: true,
          rotate: { transform: "rotate(0deg)" },
        });
      }
    };
  
    render() {
      return (
        <>
          <div className="box">
            <div className="logo">
              <Link to="/">
                <img src={OLX_LOGO} alt="logo" />
              </Link>
            </div>
            <div className="search-area">
              <select name="search" id="search-area">
                <option value="Pakistan" selected>
                  Pakistan
                </option>
                {allData.locationData.map((val, ind) => {
                  return (
                    <option key={ind} value={val}>
                      {val}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Find Cars, Mobile Phones and More..."
              />
              <div className="search-bttn">
                <materialIcon.Search
                  className="text-white"
                  style={{ fontSize: "32px" }}
                />
              </div>
            </div>
            <div className="links">
              <a href="">Login</a>
              <div className="sellBtn">
                <materialIcon.Add />
                <h2>Sell</h2>
              </div>
            </div>
          </div>
  
          <div className="menu-bar">
            <div className="main-bar" onClick={this.mainHideShowFunc}>
              <h1>ALL CATEGORIES</h1>
              <materialIcon.KeyboardArrowDown
                className="downIcon"
                style={this.state.rotate}
              />
            </div>
            <div className="other-list">
              <ul>
                {allData.menuListData.map((val, ind) => {
                  return <li key={ind}>{val}</li>;
                })}
              </ul>
            </div>
          </div>
  
          <div className="container menubar-list" style={this.state.hideShow}>
            <div className="row">
              <div className="col-3">
                <h5>Kids</h5>
                <ul>
                  {allData.KidsData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Books, Sports & Hobbies</h5>
                <ul>
                  {allData.BooksSportsData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Fashion & Beauty</h5>
                <ul>
                  {allData.FashionData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Furniture & Home Decor</h5>
                <ul>
                  {allData.FurnitureData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>
              </div>

              <div className="col-3">
                <h5>Animals</h5>
                <ul>
                  {allData.AnimalsData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Jobs</h5>
                <ul>
                  {allData.JobData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>
              </div>

              <div className="col-3">
                <h5>Services</h5>
                <ul>
                  {allData.ServicesData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Business, Industrial & Agriculture</h5>
                <ul>
                  {allData.BusinessData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Bikes</h5>
                <ul>
                  {allData.BikeData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Electronics & Home Appliances</h5>
                <ul>
                  {allData.Electronicdata.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>
              </div>

              <div className="col-3">
                <h5>Property for Rent</h5>
                <ul>
                  {allData.propertyRentData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Property for Sale</h5>
                <ul>
                  {allData.propertySaleData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>

                <h5>Vehicles</h5>
                <ul>
                  {allData.VehiclesData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>
                
                <h5>Mobiles</h5>
                <ul>
                  {allData.MobileData.map((val, ind) => {
                    return <li key={ind}>{val}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  export default Header;