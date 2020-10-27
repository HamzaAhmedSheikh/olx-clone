import React, { Component } from "react";
import './header.css';
import * as allData from '../components/header/headerData'
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

 class Navbar extends Component {
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
        </div>
  
         <div className="menu-bar">
           <div className="main-bar" onClick={this.mainHideShowFunc}>
              <h1>ALL CATEGORIES</h1>
              <KeyboardArrowDown
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
  export default Navbar;
