import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Details from './pages/details'

function App() {

  return (
    <div className="min-h-screen bg-[#f8eee7] text-gray-700">

      <div className="min-h-screen px-6 lg:px-12">

        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/recipe-item/:id"
            element={<Details />}
          />
        </Routes>

      </div>

    </div>
  )
}

export default App