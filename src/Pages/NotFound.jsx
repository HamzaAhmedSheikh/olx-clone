import React from 'react'
import Header from "../Component/Header";


export const NotFoundImage = () => {
    return(
        <>
         <div className='header__notfound'>
            <h4>Unfortunately! We are not able to find related data</h4> 
         </div>         
        </>
    )

}


const NotFound = () => {
    return (
        <>
         <Header />  
         <NotFoundImage/>
        </>  
    )
}  

export default NotFound;
