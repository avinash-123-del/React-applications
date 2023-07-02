import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks.'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div >
      <Navbar/>
      <SocialLinks/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
  
    </div>
  )
}

export default App