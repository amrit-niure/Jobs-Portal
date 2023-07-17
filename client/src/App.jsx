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

import Apply from './scenes/ApplyJob/Apply'
import Specific from './scenes/SpecificCategory/Specific'
import Applications from './scenes/Applications/Applications'



function App() {
  const [isAuth,setIsAuth] = useState(false)
  const {token, user} =useSelector((store)=> store.userData)
  const [userType,setuserType] = useState('')
  useEffect(() => {
    if(token){
      if (user.role === 'employer') {
        setuserType('employer')
        setIsAuth(true)
      }
    else if (user.role === 'jobSeeker') {
        setuserType('jobSeeker')
        setIsAuth(true)
      }
    }
    
  }, [token])
  const isEmployer = userType === 'employer'
  const isSeeker = userType === 'jobSeeker'
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainOutlet isAuth={isAuth} setIsAuth={setIsAuth}/>} >
            <Route index element={isAuth ? <Homepage /> : <Login />} />
            <Route path='details/:id' element={isAuth ? <Details /> : <ErrorPage />} />
            <Route path='createjob' element={isEmployer ? <CreateJob /> : <ErrorPage />} />
            <Route path='createjob/:id' element={isEmployer ? <CreateJob /> : <ErrorPage />} />
            <Route path='applyjob/:id' element={isSeeker ? <Apply /> : <ErrorPage />} />
            <Route path='alljobs' element={isAuth ? <MyJobList /> : <ErrorPage />} />
            <Route path='categories' element={isAuth ? <Categories /> : <ErrorPage />} />
            <Route path='categories/:id' element={isAuth ? <Specific /> : <ErrorPage />} />
            <Route path={`${isEmployer ? '/listedjobs/:userId' : 'appliedjobs/:userId'}`} element={isAuth ? <ListedJobs /> : <ErrorPage />} />
            <Route path='applications/:id' element={isEmployer ? <Applications /> : <ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
