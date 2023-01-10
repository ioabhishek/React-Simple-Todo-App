import './App.css'
import React, { useState } from 'react'
import Todo from './components/Todo'
import FormTodo from './components/FormTodo'

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ])

  const addTodo = (text) => {
    const newTodo = [...todos, {text}]
    setTodos(newTodo);
  }

  const markTodo = (index) => {
    const newTodo = [...todos]
    newTodo[index].isDone = true;
    setTodos(newTodo);
  }

  const removeTodo = (index) => {
    const newTodo = [...todos]
    newTodo.splice(index,1)
    setTodos(newTodo);
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <FormTodo addTodo={addTodo}/>
        <div>
          {
            todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App