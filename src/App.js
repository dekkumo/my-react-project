import React, { useMemo, useRef, useState } from 'react';
import './App.css';
import { Todos } from './components/pages/todoPage/todos/Todos';
import { Form } from './components/pages/todoPage/form/Form';

function App() {

  const [todos, setTodos] = useState([])
  const [select, setSelect] = useState('All')
  const [search, setSearch] = useState('')
  
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

  const selectAndSearchTodos = () => {

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

    let searchText = search.toLowerCase()
    selectArray = selectArray.filter(el => {
      return el.text.includes(searchText)
    })

    return selectArray
  }

  const selectVarTodos = useMemo(selectAndSearchTodos, [todos, select, search])
  
  return (
    <div className='App'>
      <Form 
        ref={textInput}
        todos={todos}
        setSelect={setSelect}
        setTodos={setTodos}
        setSearch={setSearch}
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
