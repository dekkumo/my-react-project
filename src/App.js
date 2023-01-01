import React, { useRef, useState } from 'react';
import './App.css';
import { AddTodo } from './todo/AddTodo';
import { ToDo } from './todo/ToDo';
import { Button, createTheme } from '@mui/material'
import TextField from '@mui/material/TextField';

function App() {

  const [todos, setTodos] = useState([])
  const textInput = useRef()
  const todoText = useRef()

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

  const handleClick = (id) => {
    const newTodos = todos.filter((el) => {
      return el.id !== id
    })
    setTodos(newTodos)
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

        {/* <TextField
          required 
          pattern="^[^\s]+(\s.*)?$"
          ref={textInput} 

          style={{marginRight: 15}}
          id="outlined-multiline-flexible"
          label="new todo"
          multiline
          size='small'
          sx={{width: 285}}
          color='warning'
        /> */}
        <Button type='submit' variant="contained">Add todo</Button>
      </form>

      {todos.map(el => (
        <div key={el.id} className='todo-list'>
          <div>{el.text}</div>
          <div>
            <button className='btn-complete'>complete</button>
            <button className='btn-delete' onClick={() => handleClick(el.id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
