import React, {useState} from 'react'
import classes from './PostsPage.module.css'

export const PostsPage = () => {

  const [posts, setPosts] = useState([])

  async function getPosts() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      let postList = await response.json()
      setPosts([...posts, ...postList])
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className={classes.post__container}>
      {posts.map((el) => (
        <div key={el.id} className={classes.post}>
          <div className={classes.title}>{el.title}</div>
          <div className={classes.body}>{el.body}</div>
        </div>
      ))}
      <button onClick={getPosts}>new posts</button>
    </div>
  )
}
