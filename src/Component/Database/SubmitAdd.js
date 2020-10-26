import firebase from 'firebase'


 export const writeUserData = (id, title, price, description, category, name, number, email, location) => {
    
    let details = {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        name: name,
        number: number,
        email: email,
        location: location
    }

    firebase.database().ref('users').child(id).set(details);
 }