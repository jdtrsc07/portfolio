import { useState } from 'react'
import Sidenav from './components/Sidenav'
import MainDesign from './components/MainDesign'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
 
  return (
    <>
      <div>
        <Sidenav />
        <MainDesign />
        <Work />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
