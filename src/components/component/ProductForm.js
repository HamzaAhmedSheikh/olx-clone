import React, {useContext} from 'react';
import { ContactData } from '../Context/ProductData';
import InputHook from './InputHooks'
import { v4 as uuidv4 } from 'uuid';


 const ProductForm = () => {
    const { dispatch } = useContext(ContactData) ;

    const [name, setName, resetName] = InputHook("");
    const [email, setEmail, resetEmail] = InputHook("");
    const [phone, setPhone, resetPhone] = InputHook("");

    const addNewProduct = e => {
      e.preventDefault();
      dispatch({type: "ADD_CONTACT",
                newProduct: {
                  id: uuidv4(),
                  name: name,
                  email: email,
                  phone: phone,  }
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

         <div className="form-group">
           <input type="submit" name="name" 
                                className="btn btn-info btn-block"  />  
         </div>  
       </form>
      </>
    )
 }

  export default ProductForm;