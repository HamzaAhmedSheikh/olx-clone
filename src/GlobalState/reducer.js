export const Add_To_Basket = 'Add_To_Basket';
export const Remove_From_Basket = 'Remove_From_Basket';
export const Set_User = 'Set_User';
export const Set_User_Data = 'Set_User_Data';

export const initialState = {
    basket :[],
    userdata: {user: false, username: null, userphoto: null, email: null}
}
 


 const reducer = (state, action) => {
    switch(action.type) {
      case Add_To_Basket: 
        return {
          ...state,
          basket: [...state.basket, action.item]  
        }  

      case Remove_From_Basket: 
        let removeArray = state.basket.filter(({id})=> id !== action.item.id)  

        return {
          ...state,
          basket: removeArray  
        }

       case Set_User: 
        return {
          ...state,
          user: action.user
        }

       case Set_User_Data: 
        return {
          ...state,
          userdata: { 
                      user: action.user,
                      username: action.username,
                      userphoto: action.photourl,
                      email: action.email
                    }  
        } 
   }  
 }

 export default reducer;