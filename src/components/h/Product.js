import React from 'react'
import Logo from '../../minion.jpg';
import '../Navbar/Navbar.css';

export const Product = () => {
    return (
        <div className="t-shirts mt-2" >
          <div className="container">              
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="card">
                    <img src={Logo} className="card-img-top" />
                    <div className="card-body">
                      <h3 className="card-title"> hello world </h3>                   
                    </div>
                </div>
               </div>

                 <div className="col-sm-12 col-md-6 col-lg-3">
                   <div className="card">                       
                     <img src={Logo} className="card-img-top" />
                      <div className="card-body">
                        <h3 className="card-title"> hello world </h3>
                         <h5 className="card-text">Rs 1000</h5>
                         <h5> Location: Nazimabad </h5>
                           <a href="./product5.html" className="btn btn-darks click"> BUY </a>
                      </div>
                   </div>
                 </div>
                 

                 <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card">
                     <img src={Logo} className="card-img-top" />
                      <div className="card-body">
                        <h3 className="card-title"> hello world  </h3>
                         <h5 className="card-text">Rs 1000</h5>
                          <a href="./product5.html" className="btn btn-darks click"> BUY </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="card">
                       <img src={Logo} className="card-img-top" />
                        <div className="card-body">
                          <h3 className="card-title"> hello world   </h3>
                           <h5 className="card-text">Rs 1000</h5>
                            <a href="./product5.html" className="btn btn-darks click"> BUY </a>
                        </div>
                      </div>
                    </div>           
                
                  

             
                </div>
               </div>
             </div>
        
    )
}
