import React, { Component } from 'react';
import Play from '../../images/playstore1.webp';
import App from '../../images/appstore1.webp';
import FooterBanner from '../../images/phone-app.webp';
import PlayStore from '../../images/playstore.webp';
import AppStore from '../../images/appstore.webp';

import { Link } from 'react-router-dom';
import { v1 as uuid, v1 } from 'uuid';
import { useHistory } from 'react-router-dom';
import Products from './Products' 



 class PostYourAds extends Component {

     state = {      
      category:'',      
      name: '',
      age: 0,    
    }
    onChangeCategory = this.onChangeCategory.bind(this);

    handleChange = event => {
        this.setState({ name: event.target.value }); 
      }
      
    handle = e => {
        this.setState({ age: e.target.value});  
      }
      
      onChangeCategory(event){
        this.setState({ category: event.target.value});  ;
      }
   
     
    handleSubmit = event => {
      event.preventDefault();   
      

     user = {
        name: this.state.name,      
        age: this.state.age,
        category: this.state.category,
        id: v1(),
    };   
   
  } 
    
  render() {
      return (      
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name: {" "}
           <input type="text" name="name" onChange={this.handleChange} />            
          </label> <br />
          <label>
            Person Age: {" "}
            <input type="number" name="age" onChange={this.handle} />
          </label> <br /> 

          <label>Category {" "}  </label> 

          <select value={this.state.category} 
                  onChange={this.onChangeCategory} 
                  className="form-control">
               
            <option value="">Select category</option>
            <option value="Properties">Properties</option>
            <option value="Cars">Cars</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Jobs">Jobs</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Bikes">Bikes</option>
            <option value="Books">Books</option>
            <option value="Fashion">Fashion</option>
            <option value="Pets">Pets</option>
            <option value="Services">Services</option>
          </select>          


          <button type="submit"> Add </button>
        </form>
          <Products details= {this.handleSubmit} />
       </div>

      
   )
 }
}


 export default PostYourAds;