import React, { useMemo, useRef, useState } from 'react';
import { Todos } from './todos/Todos';
import { Form } from './form/Form';
import classes from './TodosPage.module.css'

function TodosPage() {

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
      let lowerText = el.text.toLowerCase()
      return lowerText.includes(searchText)
    })

    return selectArray
  }

  const selectVarTodos = useMemo(selectAndSearchTodos, [todos, select, search])

  return (
    <div>
      <h1 className={classes.title}>Todo List</h1>
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
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default TodosPage;
