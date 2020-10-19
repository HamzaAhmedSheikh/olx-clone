import React, { Component } from 'react';
import Play from '../../images/playstore1.webp';
import App from '../../images/appstore1.webp';
import FooterBanner from '../../images/phone-app.webp';
import PlayStore from '../../images/playstore.webp';
import AppStore from '../../images/appstore.webp';

import { Link } from 'react-router-dom';
import axios from 'axios';

 class PostYourAds extends Component {

  state = {
    adPostError: '',
    title: '',
    category:'',
    model: '',
    condition: '',
    price: '',
    description: '',
    sellerName: '',
    soldCity: '',
    phoneNum: '',
    productImage: null,
  }

    onChangeTitle = this.onChangeTitle.bind(this);
    onChangeCategory = this.onChangeCategory.bind(this);
    onChangeModel = this.onChangeModel.bind(this);
    onChangeCondition = this.onChangeCondition.bind(this);
    onChangePrice = this.onChangePrice.bind(this);
    onChangeDescription = this.onChangeDescription.bind(this);
    onChangeSellerName = this.onChangeSellerName.bind(this);
    onChangeCity = this.onChangeCity.bind(this);
    onChangePhoneNum = this.onChangePhoneNum.bind(this);
    onChangeProductImageOne = this.onChangeProductImageOne.bind(this);
    onSubmitAd = this.onSubmitAd.bind(this);

    onChangeTitle(event){
      this.setState({
          title : event.target.value,
      });
  }

    onChangeCategory(event){
      this.setState({
        category: event.target.value,
     });
  }

  onChangeModel(event){
    this.setState({
      model: event.target.value,
    })
  }

  onChangePrice(event){
    this.setState({
      price: event.target.value,
    })
  }
  
  onChangeCondition(event){
    this.setState({
      condition: event.target.value,
    })
  }

  onChangeDescription(event){
    this.setState({
      description: event.target.value,
    })
  }

onChangeSellerName(event){
    this.setState({
        sellerName: event.target.value,
    })
}

onChangeCity(event){
    this.setState({
        soldCity: event.target.value,
    })
}

onChangePhoneNum(event){
    this.setState({
        phoneNum: event.target.value,
    })
}

onChangeProductImageOne(event){
    console.log(event.target.files[0]);
    this.setState({
        productImage: event.target.files[0]
    });
}
 
  
    onSubmitAd (e) {
    
    console.log("testing onSubmitAd function ===> ", e);
    const formData = new FormData();
    formData.append('title',this.state.title);
    formData.append('category', this.state.category);
    formData.append('model', this.state.model);
    formData.append('condition', this.state.condition);
    formData.append('price', this.state.price);
    formData.append('description', this.state.description);
    formData.append('sellerName', this.state.sellerName);
    formData.append('soldCity', this.state.soldCity);
    formData.append('phoneNum', this.state.phoneNum);
    formData.append('productImage',this.state.productImage);   
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }  
  };

  axios.post("http://localhost:3000")
  .then((response) => {
      this.setState({
                  title: '',
                  category: '',
                  model: '',
                  condition: '',
                  price: '',
                  description: '',
                  sellerName: '',
                  soldCity: '',
                  phoneNum: ''
      })
      console.log("response", response);
  }).catch(error => {
      console.log(error.message);
    });
  

  
    
   
    e.preventDefault();
};

  render(){
      return (
       <div className="container">
        <div className="row">
         <div className="col-lg-12">
          <div className="post-ad-container">
           {
            (this.state.adPostError) ? (
              <strong><p>{this.state.adPostError}</p></strong> ) : (null)
          }
            <h3> Post Your Ad </h3>
            <form>
             <div className="form-group"></div>
              <div className="form-group">
               <label>Title</label>
                <input type="text" 
                       className="form-control" 
                       value={this.state.title}
                       onChange={this.onChangeTitle}
                />
              </div>

              <div className="form-group">
                <label>Category</label>
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
              </div>
              
              <div className="form-group">
                <label>Model</label>
                <input type="text" 
                       className="form-control" 
                       value={this.state.model}
                       onChange={this.onChangeModel}
                />
              </div>

              <div className="form-group">
                <label>Condition</label>
                <select value={this.state.condition}
                        onChange={this.onChangeCondition}
                        className="form-control">

                    <option value="">Select condition</option>
                    <option value="new">New</option>
                    <option value="old">Old</option>
                    <option value="used">Used</option>
                </select>
              </div>

              <div className="form-group">
                <label>Price</label>
                <input type="text" 
                       className="form-control" 
                       value={this.state.price}
                       onChange={this.onChangePrice}
                />
              </div>
              
              <div className="from-group">
                <label>Description</label>

                <textarea name="adDiscription" 
                          className="form-control" 
                          row="7" 
                          value={this.state.description} 
                          onChange={this.onChangeDescription}>
                </textarea>
              </div>

              <div className="image-margin">
               <div className="">
                <div className="form-group">
                  <label>Image 1</label>
                  <input type="file"
                         name="productImage" 
                         onChange={this.onChangeProductImageOne} 
                         className="form-control"
                  />
                </div>
               </div>
              </div>

              <span className="text-danger"></span>
              <div className="divider"></div>

              <div className="form-group">
                <h4>Seller Information</h4>
              </div>

              <div className="form-group">
                <label>Seller Name</label>
                <input type="text" 
                       className="form-control" 
                       value={this.state.sellerName}
                       onChange={this.onChangeSellerName}
                />
              </div>

              <div className="form-group">
                <label>Item to be sold in which city? *</label>
                <input type="text" 
                       className="form-control" 
                       value={this.state.soldCity}
                       onChange={this.onChangeCity}
                />
              </div>

              <div className="form-group">
                <label>Seller phone number</label>
                <input type="text" 
                       className="form-control" 
                       value={this.state.phoneNum}
                       onChange={this.onChangePhoneNum}
                />
              </div>

              <div className="form-group">
                <span className="text-muted">
                  <small>By clicking Submit you confirm that you have carefully read and understood all the facts, statements and conditions stated in the Terms of Use & Posting Rules of our website to which you unconditionally agree and accept as true and correct and constituting a binding agreement between us.</small>
                </span>
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-lg" onClick={this.onSubmitAd}>Submit Your Ad</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   )
 }
}


 export default PostYourAds;