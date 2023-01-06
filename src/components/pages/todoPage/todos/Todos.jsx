import React, { useEffect, useState } from 'react'
import { MyModal } from '../../modal/MyModal'
import { Todo } from './todo/Todo'
import classes from './Todos.module.css'


export const Todos = ({selectVarTodos, handleToggle, handleClick}) => {

  const [todoId, setTodoId] = useState('')
  const [edit, setEdit] = useState(false)
  const [newText, setNewText] = useState('')

  let textOnInput = ''

  if (todoId) {
    textOnInput = selectVarTodos.find(el => {
      return el.id === todoId
    })
  }

  const textEditTodo = (e) => {
    console.log(textOnInput.text)
  }

  const saveEditedTodo = () => {
    setEdit(false)
  }

  return (
    <div>
      {selectVarTodos.map(el => (
        <Todo
          key={el.id}
          el={el}
          handleClick={handleClick}
          handleToggle={handleToggle}
          setTodoId={setTodoId}
          setEdit={setEdit}
        />
      ))}
      <MyModal 
        edit={edit}
        setEdit={setEdit}
      >
        <div className={classes.container}>
          <input 
            onChange={textEditTodo}
            className={classes.input__modal}
            defaultValue={textOnInput.text} />
          <button 
            className={classes.btn__modal}
            onClick={saveEditedTodo}
          >save</button>
        </div>
      </MyModal>
    </div>
  )
}
