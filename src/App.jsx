import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
//import data from './data/posts'
import Post from './pages/Post'
import { useEffect, useState } from "react"

const endpoint = 'http://localhost:3000/api/v1/social'

function App() {

  const [data, setData] = useState([])

  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setData(response)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchData(endpoint)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route data={data} index element={data.length > 0 ? <Home data={data} /> : <p>Loading...</p>} />
            <Route path="/about" Component={About} />
            <Route path="/posts" element={data.length > 0 ? <Posts data={data} /> : <p>Loading...</p>} />
            <Route path={`/posts/:id`} element={data.length > 0 ? <Post data={data} /> : <p>Loading...</p>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
