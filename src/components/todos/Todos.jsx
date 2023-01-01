import React from 'react'
import { Todo } from '../todo/Todo'


export const Todos = ({todos, handleToggle, handleClick}) => {
  return (
    <div>
      {todos.map(el => (
        <Todo
          key={el.id}
          el={el}
          handleClick={handleClick}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  )
}
