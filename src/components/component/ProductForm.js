import React, {useContext, useState} from 'react';
import { ContactData } from '../Context/ProductData';
import InputHook from './InputHooks'
import { v4 as uuidv4 } from 'uuid';


 const ProductForm = () => {   
    const {dispatch, users} = useContext(ContactData) ;     

    function extract() {
      users.map(e => (
         <img src={e.image} alt="pics" />
      ))
    }     
     
    const [name, setName, resetName] = InputHook("");
    const [email, setEmail, resetEmail] = InputHook("");
    const [phone, setPhone, resetPhone] = InputHook("");
    const [img, setImg] = useState([]);

    let a = () => ( setImg() )
       console.log(a);
    const addNewProduct = e => {
      e.preventDefault();
      dispatch({type: "ADD_CONTACT",
                newProduct: {
                  id: uuidv4(),
                  name: name,
                  email: email,
                  phone: phone,
                  image: a,                                                                                        
                }
      });
      
      resetName("");
      resetEmail("");
      resetPhone("");
     
       
    }

    return (
      <>
       <form onSubmit={addNewProduct}>
         <div className="form-group">
           <input type="text" name="name" className="form-control"
                  placeholder='Enter Name' value={name} onChange={setName}     />  
         </div>  

         <div className="form-group">
           <input type="text" name="email" className="form-control"
                  placeholder='Enter Email' value={email} onChange={setEmail}    />  
         </div>  

         <div className="form-group">
           <input type="text" name="phone" className="form-control"
                  placeholder='Enter Phone' value={phone} onChange={setPhone}    />  
         </div>  

         <div>
          <label for="myfile">Select files:</label>
          <input type="file" id="myfile" name="myfile" multiple value={img} onChange={setImg}  />         
         </div>


         <div className="form-group">
           <input type="submit" name="pic-profile" className="btn btn-block btn-info" />  
         </div>  
       </form>
      </>
    )
 }

  export default ProductForm;