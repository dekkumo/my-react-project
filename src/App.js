import React, { useRef, useState } from 'react';
import './App.css';
import { Todos } from './components/todos/Todos';
import { Form } from './components/form/Form';

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

  const handleClick = (id) => {
    const newTodos = todos.filter(el => {
      return el.id !== id
    })
    setTodos(newTodos)
  }

  const handleToggle =(id) => {
    todos.forEach(elem => {
      if (elem.id === id) elem.completed = !elem.completed
    })
    setTodos([...todos])
  }
  
  return (
    <div className='App'>
      <Form 
        ref={textInput}
        handleSubmit={handleSubmit}
      />

      <Todos 
        todos={todos}
        handleClick={handleClick}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
