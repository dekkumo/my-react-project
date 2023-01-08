import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from './PostDetails.module.css'

export const PostDetails = () => {

  const [post, setPost] = useState('')

  const params = useParams()

  async function showPost() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts/` + params.id)
      let postItem = await response.json()
      setPost(...post, postItem)
    } catch(err) {
      console.log(err.message)
    }
  }
  showPost()

  return (
    <section className={classes.post__item}>
      <div className={classes.container__post}>
        <h3 className={classes.title}>{post.title}</h3>
        <div className={classes.body}>{post.body}</div>
      </div>
      <Link to={'/posts'}>
        <button className={classes.button}>go back</button>
      </Link>
    </section>
  )
}
