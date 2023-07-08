import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,

} from 'react-router-dom'
import Login from './scenes/login/Login'
import MainOutlet from './scenes/outlet/MainOutlet'
import Homepage from './scenes/homePage/Homepage'
import Details from './scenes/Details/Details'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainOutlet />} >
            <Route index element={<Login />} />
            <Route path='home' element={<Homepage />} />
            <Route path='details' element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
