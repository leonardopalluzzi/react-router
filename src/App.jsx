import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/posts" Component={Posts} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
