

import AboutProject from './components/Projects/AboutProject'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'


import Files from './Files'

const App = () => {

  const lenis = new Lenis()


  function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)


  return (
    <div className=''>

      <Routes>
      <Route path='/' element={<Files />}/>
      <Route path='/aboutProject/:id' element={<AboutProject />}/>
    </Routes>

   
      
    </div>
  )
}

export default App
