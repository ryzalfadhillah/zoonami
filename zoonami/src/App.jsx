import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/landingPage'
import AnimalsPage from './pages/AnimalsPage/AnimalsPage'
import NotFoundPage from './pages/NotFound/NotFound'
import DetailAnimals from './pages/DetailAnimalPage/DetailAnimals'

function App() {
  return (
    <>
      <Routes>
        <Route 
          path='/'
          element={<LandingPage />}
        />
        <Route 
          path='/animals'
          element={<AnimalsPage />}
        />
        <Route 
            path='/animals/:id'
            element={<DetailAnimals />}
        />
        <Route 
          path='/login'
        />
        <Route 
          path='/dashboard'
        />
        <Route 
          path='/dashboard/animals'
        />
        <Route 
          path='/dashboard/animals-form'
        />
        <Route 
            path='*'
            element={<NotFoundPage />}
        />
      </Routes>
    </>
  )
}

export default App
