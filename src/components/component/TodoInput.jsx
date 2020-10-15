import React, { useState } from 'react';
import  { addTodo } from '../../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

const TodoInput = () => {   

  let [name, setName] = useState();  
  let dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState([]);
       
  const imageHandleChange = (e) => {
    // console.log(e.target.files);

    if(e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
          // console.log(fileArray, '===> File Array');

        setSelectedImages((prevImages) => prevImages.concat(fileArray))  
        
        Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))

    }

  }
 
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img src={photo} key={photo} alt="pics" />
    })
  }

  
    return (      
      <div>       
       <div classNam e="row m-2">
         <input type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="col form-control" />   
         <input type="file" id="file" multiple onChange={imageHandleChange} />      
         <button onClick={() => {
            dispatch(addTodo(
              {
                id: uuid(),
                name: name,   
                image: <img src={imageHandleChange} />,                                     
              }
            ))
            setName('');
         }} className="btn btn-primary mx-2"> Add </button>
       </div>
       {/* <input type="file" id="file" multiple onChange={imageHandleChange} />
       <label htmlFor="file" className="label">
             <i className="material-icons">add_a_photo</i>
       </label> 
       <div className="result">  
         {renderPhotos}         
       </div> */}
      
     </div>
    )
}

export default TodoInput;

