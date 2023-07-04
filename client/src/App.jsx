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


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainOutlet />} >
            <Route index element={<Login />} />
            <Route path='home' element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
