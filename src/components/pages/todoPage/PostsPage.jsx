import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import classes from './PostsPage.module.css'

export const PostsPage = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit] = useState(10)

  useEffect(() => {
    async function getPosts() {
      setLoading(true)
      try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let postList = await response.json()
        setPosts([...posts, ...postList])
        setLoading(false)
      } catch(err) {
        console.log(err.message)
      }
    }
    getPosts()
  }, [])

  const lastPostIndex = currentPage * limit
  const firstPostIndex = lastPostIndex - limit
  const currentPost = posts.slice(firstPostIndex, lastPostIndex)

  const pageNumbers = []

  for (let i = 1; i<= Math.ceil(posts.length / limit); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const nextPage = () => {
    setCurrentPage(prev => prev + 1)
  }

  const prevPage = () => {
    setCurrentPage(prev => prev - 1)
  }

  return (
    <div className={classes.post__container}>
      {currentPost.map(el => (
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

      <div className={classes.container__pg}>
        <ul className={classes.list_pg}>
          {pageNumbers.map(number => (
            <li key={number} className={classes.li__pg}>
              <a onClick={() => paginate(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={prevPage}>prev page</button>
      <button onClick={nextPage}>next page</button>
    </div>
  )
}
