import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  // ({isme}) agar aap kuch le rahe ho toh wo bina prop k pass hoga
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      {/* agr function ka naam amey hai toh amey likhne se pass hoga amey() likhne se call hoga */}
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}