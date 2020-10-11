import React, { useState, createContext, useReducer } from "react";

export const ContactData = createContext();

const ContactDataProvider = (props) => {

    const [contacts, setContacts] = useState([
      {id: 1, name: "Hamza", email: "hamza@gmail.com", phone: "333-555-222"},
      {id: 2, name: "Ahmed", email: "ahmed@gmail.com", phone: "111-555-222"},
      {id: 3, name: "Ham", email: "ham@gmail.com", phone: "333-6666-222"},
    ])

    useReducer(contactReducer)


    return (
      <ContactData.Provider value={{users: contacts }}>
        {props.children}   
      </ContactData.Provider>  
    );
}

export default ContactDataProvider;