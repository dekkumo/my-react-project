import React from 'react'
import classes from './Todo.module.css'

export const Todo = ({el, handleToggle, handleClick}) => {
  return (
    <div className={classes.todoList}>
      <div className={el.completed ? classes.completed : ''}>{el.text}</div>
      <div>
        <button className={classes.btnComplete} onClick={() => handleToggle(el.id)}>complete</button>
        <button className={classes.btnDelete} onClick={() => handleClick(el.id)}>delete</button>
      </div>
    </div>
  )
}
