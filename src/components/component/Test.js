import React, { useState, useContext  } from 'react'
import "bootswatch/dist/materia/bootstrap.min.css"; 
import { ContactData } from '../Context/ProductData';
import  ProductDetails from './ProductDetails';

 const Product = () => {
  const { users } = useContext(ContactData);
    console.log(users);
    return users.length ? 
      <table className="table">
       <thead>
         <tr>
          <th> Name  </th>   
          <th> Email  </th>   
          <th> Phone  </th>   
          <th> Delete </th>   
         </tr>  
       </thead>   

       <tbody>
         {users.map(user => (
            <tr key={user.id}>
              <ProductDetails user={user} />  
            </tr>  
         ))}  
       </tbody>
      </table> 
         : 
      <div> No data </div>;
 }

 export default Product;