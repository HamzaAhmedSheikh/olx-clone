import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,  
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DetailForm from "./productDetailForm";

class FormHeader extends Component {
  render() {
    return (
      <div className="container-fluid formHeader">
        <div className="row">
          <Link to={this.props.link}>
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </Link>
          <img alt="this is a logo" />
        </div>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <div className="container">
        <h4>POST YOUR AD</h4>

        <DetailForm />
      </div>
    );
  }
}

export { FormHeader, Form };
