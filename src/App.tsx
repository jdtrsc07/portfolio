import { useState } from 'react'
import Sidenav from './components/Sidenav'
import MainDesign from './components/MainDesign'
import Work from './components/Work'
import Projects from './components/Projects'
function App() {
 
  return (
    <>
      <div>
        <Sidenav />
        <MainDesign />
        <Work />
        <Projects />
      </div>
    </>
  )
}

export default App
