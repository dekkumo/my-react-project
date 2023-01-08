import React from 'react'
import classes from './MyModal.module.css'

export const MyModal = ({children, edit, setEdit}) => {

  const closeModal = () => {
    setEdit(false)
  }

  const notCloseModal = (e) => {
    e.stopPropagation()
  }

  return (
    <div 
      onClick={closeModal}
      className={(edit) ? [classes.modal, classes.active].join(' ') : classes.modal}
    >
      <div
        onClick={notCloseModal}
        className={classes.content}
      >
        {children}
      </div>
    </div>
  )
}
