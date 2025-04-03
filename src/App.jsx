import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
//import data from './data/posts'
import Post from './pages/Post'
import { PostProvider } from "./contexts/PostContext"



function App() {

  return (
    <>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/posts" Component={Posts} />
              <Route path={`/posts/:id`} Component={Post} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostProvider>


    </>
  )
}

export default App
