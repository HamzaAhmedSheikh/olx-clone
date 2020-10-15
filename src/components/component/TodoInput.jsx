import React, { useState } from 'react';
import  { addTodo } from '../../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import DisplayImage from './DisplayImage'
const TodoInput = () => {   

  let [name, setName] = useState();  
  let dispatch = useDispatch();
  const [image, setImage] = useState([]);

  let onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      });
    }
  };
       
  

  
    return (      
      <div>       
       <div classNam e="row m-2">
         <input type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="col form-control" />   
             
             <input type="file" name="myImage" value={null} multiple onChange={onImageChange} />
         <button onClick={() => {
            dispatch(addTodo(
              {
                id: uuid(),
                name: name,   
                image: `${<img src={image} />}` ,                                     
              }
            ))
            setName('');
         }} className="btn btn-primary mx-2">
           Add </button>
       </div>
       
      
     </div>
    )
}

export default TodoInput;

