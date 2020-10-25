import React, { useContext } from 'react';
import { ProductContext } from '../../Global/ProductContext'
import { Card, Button } from 'react-bootstrap';


 const Products = () => {
    const { products } = useContext(ProductContext);

   return(
     <>
      <div className="products">      
        {products.map((product) => (
          <div className="product" key={product.id}>            
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title> { product.name } </Card.Title>    
                    <Card.Title> Rs.{ product.price }.00 </Card.Title>   
                </Card.Body>
              </Card>  
             

            {product.status === 'FEATURED' ? <div className="featured"> FEATURED </div> : ""}
            {product.status === '' ? <i className="far fa-heart 7x empty"></i> : ""}            
           </div>            
        ))}                 
         
      </div>  

      <button className="load-more fontb cfff anim s20"> Load More </button>    

     </>      
   )   
 }

 export default Products;