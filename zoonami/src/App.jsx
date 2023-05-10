import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/landingPage'
import AnimalsPage from './pages/AnimalsPage/AnimalsPage'
import NotFoundPage from './pages/NotFound/NotFound'
import DetailAnimals from './pages/DetailAnimalPage/DetailAnimals'
import DashboardLayout from './layout/DashboardLayout'
import Welcome from './pages/Welcome/Welcome'
import ManagementAnimals from './pages/ManagementAnimals/ManagementAnimals'
import FormAnimals from './pages/FormAnimals/FormAnimals'

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
          element={
            <DashboardLayout>
              <Welcome />
            </DashboardLayout>
          }
        />
        <Route 
          path='/dashboard/animals'
          element={
            <DashboardLayout>
              <ManagementAnimals />
            </DashboardLayout>
          }
        />
        <Route 
          path='/dashboard/animals-form'
          element={
            <DashboardLayout>
              <FormAnimals />
            </DashboardLayout>
          }
        />
        <Route 
          path='/dashboard/animals-form/:idEdit'
          element={
            <DashboardLayout>
              <FormAnimals />
            </DashboardLayout>
          }
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
