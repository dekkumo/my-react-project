import React, { useRef, useState } from 'react';
import './App.css';
import { AddTodo } from './todo/AddTodo';
import { ToDo } from './todo/ToDo';
import { Button } from '@mui/material'

function App() {

  const [todos, setTodos] = useState([])
  const textInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    const id = Math.random()

    const todoObj = {
      id: id,
      text: textInput.current.value,
      completed: false
    }

    textInput.current.value = ''
    textInput.current.focus()

    setTodos([...todos, todoObj])
  }
  
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input 
          required 
          pattern="^[^\s]+(\s.*)?$" 
          ref={textInput} 
          placeholder='new todo' 
        />
        <Button type='submit' variant="contained">Add todo</Button>
      </form>

      {todos.map(el => (
        <div className='todo' key={el.id}>{el.text}</div>
      ))}
    </div>
  );
}

export default App;
