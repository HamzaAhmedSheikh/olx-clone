import React, {useState, useEffect}  from 'react';
import firebase from 'firebase';
import { storage } from './Login'
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import Footer from '../Component/footer/MainFooter';
import DisplayAdd from '../Component/Widgets/DisplayAdd';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '90vh',
      marginTop: theme.spacing(8),
      '& > * + *': {
        marginTop: theme.spacing(8),
        
      },
    },
  }));

const UserAdds = () => {

    const [id, setid] = useState('....')
    const [title, settitle] = useState('....')
    const [price, setprice] = useState('....')
    const [description, setdescription] = useState('....')
    const [category, setcategory] = useState('....')
    const [location, setlocation] = useState('....')
    const [email, setemail] = useState('....')
    const [name, setname] = useState('....')
    const [number, setnumber] = useState('....')
    
    const [count, setcount] = useState(0)
    const classes = useStyles();
    const link = window.location.href;
    const addNumber = link.split('/add_users/')[1]

    

    const takeData = () => {

    let firebaseRef = firebase.database().ref("users");  
    firebaseRef.once("value", (snapshot) => {
      console.log(snapshot.val());
    const {id, title, price, description, category, location, email, name, number} = snapshot.val()[addNumber]
     
    setid(id)
    settitle(title)
    setlocation(location)
    setprice(price)
    setdescription(description)
    setcategory(category)
    setemail(email)
    setnumber(number)
    setname(name)      
   
    })


    
  
    }
    
    

    useEffect(() => {
       
      takeData();  
    }, [])
 
    return (
        <div>
        <Header />
       
        <Navbar />
      
        <DisplayAdd 
        id={id}
        title={title}
        price={price}
        description = {description}
        category={category}
        location = {location}
        email = {email}
        name={name}
        number={number}
        image = {`https://firebasestorage.googleapis.com/v0/b/olx-clone-a4154.appspot.com/o/${id.toString()}?alt=media&token=4dede770-68f6-4c7e-879f-da97e126463a`}


        />  
       
      
        <Footer/>
    </div>
    )
}

export default UserAdds;