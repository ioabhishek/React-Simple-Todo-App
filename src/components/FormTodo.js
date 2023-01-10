import React, { useState } from 'react'

function FormTodo({addTodo}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value)return;
    addTodo(value);
    setValue("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add Todo</label>
        <input 
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormTodo;