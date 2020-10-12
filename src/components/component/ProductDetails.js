import React, { useContext } from 'react'
import  { ContactData } from '../Context/ProductData'

const ProductDetails = ({user}) => {
      console.log(user);
  const { dispatch } = useContext(ContactData);  


    return (
     <>   
      <td> {user.name} </td>         
      <td> {user.email} </td> 
      <td> {user.phone} </td> 
      <td> <img src={user.image} alt="pic"  style={{width: "70px"}}/> </td> 
      <td>
        <button type="button"
                className="btn btn-danger"
                onClick={() => dispatch({type: "REMOVE_PRODUCT", id: user.id})}> 
            Delete 
        </button>      
      </td>
     </> 
    )
}

export default ProductDetails;