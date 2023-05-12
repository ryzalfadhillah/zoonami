import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import AnimalsPage from './pages/AnimalsPage/AnimalsPage'
import NotFoundPage from './pages/NotFound/NotFound'
import DetailAnimals from './pages/DetailAnimalPage/DetailAnimals'
import DashboardLayout from './layout/DashboardLayout'
import Welcome from './pages/Welcome/Welcome'
import ManagementAnimals from './pages/ManagementAnimals/ManagementAnimals'
import FormAnimals from './pages/FormAnimals/FormAnimals'
import LoginPage from './pages/LoginPage/LoginPage'
import { PropTypes } from 'prop-types';

const App = () => {

  const DashboardRoute = (props) => {
    if(!sessionStorage.getItem('accessToken')){
        return <Navigate to={'/login'} />
    }else if(sessionStorage.getItem('accessToken') !== undefined){
        return props.children
    }
  }

  const LoginRoute = (props) => {
    if(!sessionStorage.getItem('accessToken')){
      return props.children
    }else if(sessionStorage.getItem('accessToken') !== undefined){
      return <Navigate to={'/dashboard'} />
    }
  }

  DashboardRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  LoginRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

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
          element={
          <LoginRoute>
            <LoginPage />
          </LoginRoute>
          }
        />
        <Route 
          path='/dashboard'
          element={
            <DashboardRoute>
              <DashboardLayout>
                <Welcome />
              </DashboardLayout>
            </DashboardRoute>
          }
        />
        <Route 
          path='/dashboard/animals'
          element={
            <DashboardRoute>
              <DashboardLayout>
                <ManagementAnimals />
              </DashboardLayout>
            </DashboardRoute>
          }
        />
        <Route 
          path='/dashboard/animals-form'
          element={
            <DashboardRoute>
              <DashboardLayout>
                <FormAnimals />
              </DashboardLayout>
            </DashboardRoute>
          }
        />
        <Route 
          path='/dashboard/animals-form/:idEdit'
          element={
            <DashboardRoute>
              <DashboardLayout>
                <FormAnimals />
              </DashboardLayout>
            </DashboardRoute>
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
