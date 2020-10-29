import React, { Component } from 'react';
import firebase from 'firebase';
import { database, auth } from '../Pages/Login';
import { ThreeSixtySharp } from '@material-ui/icons';


class FirebaseData extends Component {
    constructor(){
       super()
       this.state = {
         userInformation: [],
      }
  
    }
    
   componentDidMount() {
          
      firebase.database().ref('users').on('child_added', snapshot => {
         let userInformationList = [];

         snapshot.forEach(snap => {
            userInformationList.push(snap.val())
            // console.log(userInformationList);
         });
         this.setState({ userInformation: userInformationList })
      })      
   } 

   render() {
     return (
        <div> 
         {this.state.userInformation.map( data => {
            return (
               <tr>
                  <td>{data.category}</td>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
               </tr>
            )

           })}
        </div>
     )  
   } 
}


export default FirebaseData;