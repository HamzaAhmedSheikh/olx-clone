import React, {useEffect, Component} from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import { AppBar, Toolbar,  IconButton, Typography, InputBase } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
import { Link } from 'react-router-dom';
import { Nav, Navbar, InputGroup, Col, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { signInWithGoogle } from '../../firebase/utils';



  const nav = [
        {ID: 1, label: "Mobile Phones"},
        {ID: 2, label: "Cars"},
        {ID: 3, label: "Motorcycles"},
        {ID: 4, label: "Houses"},
        {ID: 5, label: "TV-Video-Audio"},
        {ID: 6, label: "Tablets"},
        {ID: 7, label: "Land & Plots"},
   ]

  class Navbars  extends Component {            
        
      

    render() {      
      return (
       <React.Fragment>
        <Navbar bg="light" expand="lg">
         <Navbar.Brand href="#home">
          <Link to='/'>
          <svg  viewBox="0 0 1024 1024" style={{width: "48px"}}
            data-aut-id="icon" className="" fillRule="evenodd">
            <path className="rui-77aaa" 
                  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
            </path>
          </svg>   
          </Link>          
         </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">        
        <select className="select">         
         <option value="country"> Karachi, Pakistan </option>
       </select>  
         

       <Form inline>  
        <Form.Group as={Row} controlId="formHorizontalEmail">         
         <Col sm={8} md={6} lg={10}  >
          <Form.Control size="lg" type="text" placeholder="Find Cars, Mobile Phones and more..."  style={{width: "300%"}}/>              
         </Col>           
       </Form.Group>            
      </Form>               
      <Col sm={4} md={6} lg={2}>  
         <InputGroup>
           <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><i className='fas fa-search'></i></InputGroup.Text>
           </InputGroup.Prepend>                  
         </InputGroup>                      
      </Col>        
    </Nav>       
    
     <div className="actions flex">
      {/* <Link to="/" className="color fontb s16 noul noulh">  */}
       <button onClick={signInWithGoogle}> Sign In </button>   
      {/* </Link>     */}
      




       <button className="sell flex color aic">
        <div className="fas fa-plus ico" />         
          <h2 className="s18 fontb">
           <Link to="/post-your-add"> Sell </Link>   
          </h2>            
       </button>  
     </div>  
  </Navbar.Collapse>  
</Navbar>

  
  <Navbar bg="light" className='positi'>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />  
    <div className="hnav abs flex aic">
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
   
  </Navbar>  
 
  </React.Fragment>
  )
 }
}

export default Navbars;


