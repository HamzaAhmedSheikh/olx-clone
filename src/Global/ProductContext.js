import React, { createContext, useState } from 'react';

import wirelessheadphone from '../images/wireless-headphones.jpg';
import cocacola from '../images/coca-cola bottle.jpg';
import table from '../images/table.jpg';
import sofa from '../images/2-seater-sofa.jpg';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
   const [products] = useState([
      {id: 1, name: "2 Seater Sofa", price: 25000, image: sofa, status: 'FEATURED'},
      {id: 2, name: "Table", price: 95000, image: table, status: 'FEATURED'}, 
      {id: 3, name: "2 Seater Sofa", price: 28000, image: sofa, status: 'FEATURED'},  
      {id: 4, name: "Wireless Headphones", price: 1600, image: wirelessheadphone, status: ''},
      {id: 5, name: "Wireless Headphones", price: 1700, image: wirelessheadphone, status: ''},
      {id: 6, name: "Wireless Headphones", price: 1800, image: wirelessheadphone, status: 'FEATURED'},
      {id: 7, name: "Wireless Headphones", price: 1900, image: wirelessheadphone, status: ''},
      {id: 8, name: "Wireless Headphones", price: 2000, image: wirelessheadphone, status: 'FEATURED'},
      {id: 9, name: "Wireless Headphones", price: 2000, image: wirelessheadphone, status: ''},
      {id: 10, name: "Wireless Headphones", price: 2000, image: wirelessheadphone, status: ''},
   ]);

    return(
      <ProductContext.Provider value={{products: [...products]}}>
          {props.children}
      </ProductContext.Provider>     
    )
}

 export default ProductContextProvider;