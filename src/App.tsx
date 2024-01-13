import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SearchPage from './pages/search-page'
import BookDetails from './pages/book-details'

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search' element={<SearchPage />}/>
          <Route path='/books/:id' element={<BookDetails />}/>
        </Routes>
    </div>
  )
}

export default App
