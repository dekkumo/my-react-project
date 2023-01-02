import React, { useMemo, useRef, useState } from 'react';
import './App.css';
import { Todos } from './components/todos/Todos';
import { Form } from './components/form/Form';

function App() {

  const [todos, setTodos] = useState([])
  const [select, setSelect] = useState('All')
  
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

  const selectTodosFn = () => {

    let copyTodos = [...todos]

    let selectArray = []

    switch (select) {
      case 'All':
        selectArray = copyTodos;
        break;
      case 'Completed':
        selectArray = copyTodos.filter(el => {
          return el.completed === true;
        })
        break;
      case 'Uncompleted':
        selectArray = copyTodos.filter(el => {
          return el.completed === false;
        })
        break;
    }

    return selectArray
  }

  const selectVarTodos = useMemo(selectTodosFn, [todos, select])
  
  return (
    <div className='App'>
      <Form 
        ref={textInput}
        todos={todos}
        setSelect={setSelect}
        setTodos={setTodos}
        handleSubmit={handleSubmit}
      />

      <Todos 
        selectVarTodos={selectVarTodos}
        handleClick={handleClick}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
