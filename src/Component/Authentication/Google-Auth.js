import { auth, google_provider } from '../../Pages/Login';

export const Google_Auth_Login = (dispatch) => {

   auth().signInWithPopup(google_provider).then(({ user }) => {

    dispatch({
        type: "Set_User_Data",
        username: user.displayName,
        photourl: user.photoURL,
        user: true,
        email: user.email
     })
   })
 } 

export const  Google_Auth_Logout = (dispatch) => {

  auth().signOut().then(function() {  

    dispatch({
        type: "Set_User_Data",
        username: null,
        photourl: null,
        user: false, 
        email: null 
    }).catch(function(error) {
        console.log(error)
    });
 }


