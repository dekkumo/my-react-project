import { Button } from '@mui/material'
import React, { useRef } from 'react'

export const AddTodo = ({array}) => {

  const textInput = useRef()

  function handleSubmit(event) {
    event.preventDefault()

    console.log(textInput.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={textInput} placeholder='new todo' />
      <Button type='submit' variant="contained">Add todo</Button>
    </form>
  )
}
