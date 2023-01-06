import React, {useState} from 'react'
import classes from './Todo.module.css'

export const Todo = ({el, handleToggle, handleClick, setEdit, setTodoId}) => {

  const editTodo = () => {
    setEdit(true)
    setTodoId(el.id)
  }

  return (
    <div className={classes.todoList}>
      <div className={el.completed ? classes.completed : ''}>{el.text}</div>
      <div>
        <button className={classes.btnComplete} onClick={() => handleToggle(el.id)}>complete</button>
        <button className={classes.btnDelete} onClick={() => handleClick(el.id)}>delete</button>
        <button className={classes.btnEdit} onClick={editTodo}>edit</button>
      </div>
    </div>
  )
}
