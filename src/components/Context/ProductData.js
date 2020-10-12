import React, { useState, createContext, useReducer } from "react";
import { ProductReducer } from "../../Reducers/ProductReducer"

export const ContactData = createContext();

const ContactDataProvider = (props) => {    
    const [contacts, dispatch] = useReducer(ProductReducer, [
      {id: 1, name: "Hamza", email: "hamza@gmail.com", phone: "333-555-222"},
      {id: 2, name: "Ahmed", email: "ahmed@gmail.com", phone: "111-555-222"},
      {id: 3, name: "Ham", email: "ham@gmail.com", phone: "333-6666-222"},
    ])


    return (
      <ContactData.Provider value={{users: contacts, dispatch }}>
        {props.children}   
      </ContactData.Provider>  
    );
}

export default ContactDataProvider;