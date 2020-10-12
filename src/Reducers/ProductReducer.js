export const ProductReducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_CONTACT':
            return [...state, action.newProduct];  

        case "REMOVE_PRODUCT": 
          if(window.confirm("Are you really want to delete this product?")) {
             const filtered = state.filter((contact) => contact.id !== action.id);

              return filtered;
          }   

        default: 
           return state;  
    }

     



}