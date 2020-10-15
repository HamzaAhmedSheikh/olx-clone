import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './actions';
import { todos } from './states';

export let reducer = (state = todos, action) => {
    let newTodos;
   switch(action.type) {
      case ADD_TODO:          
        newTodos = [...state]
        newTodos.push(action.payload);

         return newTodos;
        

      case DELETE_TODO:    
        newTodos = [...state]
        newTodos = newTodos.filter(todo => todo.id != action.payload)

         return newTodos;        

      case UPDATE_TODO:          
        break;


      default: 
        return state;
   }
} 