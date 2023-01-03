import React, { forwardRef, useRef } from 'react'
import { Button, createTheme } from '@mui/material'
import classes from './Form.module.css'

export const Form = forwardRef((props, ref) => {

  const selectTodo = (e) => {
    props.setSelect(e.target.value)
  }

  const searchTodo = (e) => {
    props.setSearch(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <input 
        className={classes.input}
        required 
        pattern="^[^\s]+(\s.*)?$"
        ref={ref} 
        placeholder='new todo' 
      />
      <Button type='submit' variant="contained">Add todo</Button>

      <select onChange={selectTodo}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>

      <input onInput={searchTodo} />
    </form>
  )
})
