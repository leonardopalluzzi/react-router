import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import data from './data/posts'
import Post from './pages/Post'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route data={data} index element={<Home data={data} />} />
            <Route path="/about" Component={About} />
            <Route path="/posts" element={<Posts data={data} />} />
            <Route path={`/posts/:id`} element={<Post data={data} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
