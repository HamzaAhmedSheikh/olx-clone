import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const nav = [
        {ID: 1, label: "Mobile Phones"},
        {ID: 2, label: "Cars"},
        {ID: 3, label: "Motorcycles"},
        {ID: 4, label: "Houses"},
        {ID: 5, label: "TV-Video-Audio"},
        {ID: 6, label: "Tablets"},
        {ID: 7, label: "Land & Plots"},
    ]
    return(
      <>   
      <div className="header fixed flex aic">
       <div className="logo">
        <svg  viewBox="0 0 1024 1024"
             data-aut-id="icon" class="" fill-rule="evenodd">
          <path class="rui-77aaa" 
                d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
          </path>
        </svg> 
       </div>   

        <div className="location rel flex aic">
          <div className="fas fa-search ico s24">
            <input className="label s15 font" placeholder="Your Location" value="Pakistan" />
            <button className="fas fa-chevron-down arro s24" />
          </div>
        </div>
        
        <div className="search flex aic">
          <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="query s15" /> 
          <button className="fas fa-search go s24 cfff" />
        </div>

        <div className="actions flex aic">
          <Link to="/account/signin" className="color fontb s16 noul noulh"> Sign In </Link>   
         <button className="sell flex color aic">
          <div className="fas fa-plus ico s24" />
          <h2 className="s18 fontb"> Sell </h2>    
         </button>  
        </div>
      </div>
      
      {/*----------------------------------------------------------------*/}

      <div className="hnav fixed flex aic">
        <button className="view-cates flex aic color">
          <h2 className="s18 font color"> All Categories </h2>    
          <button className="fas fa-chevron-down arro s24" />
        </button>          
        {
           nav.map(item => {
              return(
                  <Link to={"/browser/" + item.ID} className="noul noulh color bl font s15">
                      {item.label}
                  </Link>
              )
           })  
        }         
      </div>
       <div className="hclr" />
      
      </>
    )
}

export default Header;