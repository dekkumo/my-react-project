import React, { forwardRef } from 'react'
import { Button, createTheme } from '@mui/material'
import classes from './Form.module.css'

export const Form = forwardRef((props, ref) => {
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
    </form>
  )
})
