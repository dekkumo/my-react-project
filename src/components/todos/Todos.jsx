import React from 'react'
import { Todo } from './todo/Todo'


export const Todos = ({selectVarTodos, handleToggle, handleClick}) => {
  return (
    <div>
      {selectVarTodos.map(el => (
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
