import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions';

const TodoItem = ({ todo }) => {   

   let dispatch = useDispatch();

    return (
      <div>
        <div className="row mx-2 align-items-center">
         <div> #{todo.id.length > 1 ? todo.id[2] : todo.id } </div>    
         <div className="col"> 
            <h4> {todo.name} </h4>
            <img src={todo.img} style={{width: "55px"}} alt="todo-logo" />
         </div> 
         <button className="btn btn-primary m-2"> Edit </button>
         <button onClick={() => dispatch(deleteTodo(todo.id))} 
                 className="btn btn-danger m-2"> Delete </button>
        </div>  
     </div>
    )
}

export default TodoItem;
