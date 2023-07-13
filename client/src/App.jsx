import { useState,useEffect } from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,

} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './scenes/login/Login'
import MainOutlet from './scenes/outlet/MainOutlet'
import Homepage from './scenes/homePage/Homepage'
import Details from './scenes/Details/Details'
import CreateJob from './scenes/CreateJob/CreateJob'
import ErrorPage from './scenes/Error/ErrorPage'
import MyJobList from './scenes/MyJobList/MyJobList'
import ListedJobs from './scenes/Listed Jobs/ListedJobs'
import Categories from './scenes/Categories/Categories'
import Test from './components/Test'


function App() {
  const [isAuth,setIsAuth] = useState(false)
  const {token} =useSelector((store)=> store.userData)
useEffect(() => {
  if (token) {
    setIsAuth(true)
  }
}, [token])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainOutlet isAuth={isAuth} setIsAuth={setIsAuth}/>} >
            <Route index element={isAuth ? <Homepage /> : <Login />} />
            <Route path='details/:id' element={isAuth ? <Details /> : <ErrorPage />} />
            <Route path='createjob' element={isAuth ? <CreateJob /> : <ErrorPage />} />
            <Route path='createjob/:id' element={isAuth ? <CreateJob /> : <ErrorPage />} />
            <Route path='alljobs' element={isAuth ? <MyJobList /> : <ErrorPage />} />
            <Route path='categories' element={isAuth ? <Categories /> : <ErrorPage />} />
            <Route path='categories/:id' element={isAuth ? <Test /> : <ErrorPage />} />
            <Route path='listedjobs/:userId' element={isAuth ? <ListedJobs /> : <ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
