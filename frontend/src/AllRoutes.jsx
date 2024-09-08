import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'

import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import About from './pages/About/About'
import Public from './pages/Public/Public'
import Users from './pages/Users/Users'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
const AllRoutes = () => {
  return (
   <Routes>
   
    <Route path='/' element={<Home/>} />
     <Route path='/Login' element={<Login/>} />
     <Route path='/Signup' element={<Signup/>} />
     <Route path='/Questions' element={<Questions/>} />
     <Route path='/AskQuestion' element={<AskQuestion/>} />
     <Route path='/Questions/:id' element={<DisplayQuestion/>} />
     <Route path='/Tags' element={<Tags/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/Public' element={<Public/>} />
     <Route path='/Users' element={<Users/>} />

   </Routes>
  )
}

export default AllRoutes
