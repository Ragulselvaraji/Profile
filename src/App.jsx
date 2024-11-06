import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Certification from './Components/Certification'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Certification/>
    <Projects/>
    <Contact/>
      
    </>
  )
}

export default App
