import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SearchPage from './pages/search-page'
import BookDetails from './pages/book-details'
import Navbar from './components/navbar'

function App() {

  return (
    <div>
      <Navbar />

      <div className='sm:mt-10 mt-16'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/books/:id' element={<BookDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
