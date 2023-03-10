import React, { forwardRef, useRef } from 'react'
import classes from './Form.module.css'

export const Form = forwardRef((props, ref) => {

  const selectTodo = (e) => {
    props.setSelect(e.target.value)
  }

  const searchTodo = (e) => {
    props.setSearch(e.target.value)
  }

  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <div className={classes.container__add}>
        <input
          className={classes.input}
          required
          pattern="^[^\s]+(\s.*)?$"
          ref={ref}
          placeholder='new todo'
        />
        <button
          className={classes.button}
          type='submit'
          variant="contained"
        >
        Add todo
      </button>
      </div>

      <div className={classes.container__search}>
        <select className={classes.select} onChange={selectTodo}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>

        <input
          className={classes.searchInput}
          onInput={searchTodo}
          placeholder='search'
        />
      </div>
    </form>
  )
})
