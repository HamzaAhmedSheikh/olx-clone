import React, { Component } from "react";
import "./wrapper.css";

class Bottom extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="bottom_box">
        <div className="layer">
          <div className="img_cont">
            <img
              src="https://statics.olx.com.pk/external/base/img/phone-app.webp"
              alt="olx_image"
            />
          </div>
          <div className="det">
            <h1>TRY THE OLX APP</h1>
            <p>
              Buy, sell and find just about anything using the app on your
              mobile.
            </p>
          </div>
          <div className="apps_link">
            <h2>GET YOUR APP TODAY</h2>
            <div className="under">
              <a href="https://itunes.apple.com/app/olx-pakistan/id1119081665?mt=8">
                <img
                  src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp"
                  alt="App_Store_Link"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                <img
                  src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp"
                  alt="Play_Store_Link"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;