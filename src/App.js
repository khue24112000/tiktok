import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'
import { Route, Routes, Link } from 'react-router-dom'
function App() {

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/news' element={<NewsPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
    </>
  )
}

export default App