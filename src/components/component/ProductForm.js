import React, {useContext, useState} from 'react';
import { ContactData } from '../Context/ProductData';
import InputHook from './InputHooks'
import { v4 as uuidv4 } from 'uuid';


 const ProductForm = () => {   
    const {dispatch, users} = useContext(ContactData) ;     

         
     
    const [name, setName, resetName] = InputHook("");
    const [email, setEmail, resetEmail] = InputHook("");
    const [phone, setPhone, resetPhone] = InputHook("");
    const [selectedImages, setSelectedImages] = useState([]);

    const imageHandleChange = (e) => {
      // console.log(e.target.files);

      if(e.target.files) {
        const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            // console.log(fileArray, '===> File Array');

          setSelectedImages((prevImages) => prevImages.concat(fileArray))  
          
          Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))

      }

    }

    const renderPhotos = (source) => {
      return source.map((photo) => {
        return <img src={photo} key={photo} alt="pics" />
      })
    }
           
    const addNewProduct = e => {
      e.preventDefault();      
      console.log("e ====>", e);

      dispatch({type: "ADD_CONTACT",
                newProduct: {
                  id: uuidv4(),
                  name: name,
                  email: email,
                  phone: phone,
                  image:  "abc",                                                                                                                         
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
           <input type="file" id="file" multiple onChange={imageHandleChange} />
           <label htmlFor="file" className="label">
             <i className="material-icons">add_a_photo</i>
           </label>                
         </div>

         <div className="result">           
         </div>


         <div className="form-group">
           <input type="submit" name="pic-profile" className="btn btn-block btn-info" />  
         </div>  
       </form>
      </>
    )
 }

  export default ProductForm;