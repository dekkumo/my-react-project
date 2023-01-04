import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <div className={classes.header}>
      <Link className={classes.link} to='/posts'>Posts</Link>
      <Link className={classes.link} to='/'>Todos</Link>
    </div>
  )
}
