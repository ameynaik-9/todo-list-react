import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [description,setdescription] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !description){
            alert("Title or description can't be left blank");
        }
        else{
        props.addTodo(title,description);
        // After addition of task it is getting clear by this code
        setTitle("");
        setdescription("");
        }
    }


  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Todo Description</label>
    <input type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} className="form-control" id="description"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

