import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import classes from './PostsPage.module.css'

export const PostsPage = () => {

  const [posts, setPosts] = useState([])
  const [start, setStart] = useState(0)

  async function getPosts() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`)
      let postList = await response.json()
      setPosts([...posts, ...postList])
      setStart(start+10)
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className={classes.post__container}>
      {posts.map(el => (
        <div key={el.id} className={classes.post}>
          <Link 
            to={`/posts/${el.id}`} 
            className={classes.link}
          >
            <div className={classes.title}>{el.title}</div>
            <div className={classes.body}>{el.body}</div>
          </Link>
        </div>
      ))}
      <button className={classes.button} onClick={getPosts}>new posts</button>
    </div>
  )
}
