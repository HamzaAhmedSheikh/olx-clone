import React, { Component } from 'react';
import firebase from 'firebase';
import { database, auth } from '../Pages/Login';


class FirebaseData extends Component {
    state = {
       user: null  
    }

   componentDidMount() {
      console.log('mounted');     
      firebase.database().ref('users').on('child_added', function(data) {
          console.log(data.val());
      })
   } 

   render() {
     return (
        <div> hello world </div>
     )  
   } 
}


export default FirebaseData;