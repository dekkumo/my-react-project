import React, { useEffect, useRef, useState } from 'react'
import { MyModal } from '../../modal/MyModal'
import { Todo } from './todo/Todo'
import classes from './Todos.module.css'


export const Todos = ({selectVarTodos, handleToggle, handleClick, todos, setTodos}) => {

  const [todoId, setTodoId] = useState('')
  const [edit, setEdit] = useState(false)

  const inputText = useRef()

  let textOnInput = {}

  if (todoId) {
    textOnInput = selectVarTodos.find(el => {
      return el.id === todoId
    })

    inputText.current.value = textOnInput?.text
  }

  const saveEditedTodo = () => {
    let todosCopy = [...todos]
    todosCopy = todosCopy.map(el => {
      if (el.id === todoId) {
        return {
          ...el,
          text: inputText.current.value
        }
      } else {
        return el
      }
    })
    setTodos(todosCopy)
    setEdit(false)
  }

  const closeModal = () => {
    setEdit(false)
  }


  return (
    <div className={classes.container__todos}>
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
        <div className={classes.container__modal}>
          <input
            ref={inputText}
            className={classes.input__modal}
          />
          <div className={classes.btn__container}>
            <button
              className={classes.btn__modal}
              onClick={saveEditedTodo}
            >save</button>
            <button onClick={closeModal} className={classes.btnCancel}>cancel</button>
          </div>
        </div>
      </MyModal>
    </div>
  )
}
