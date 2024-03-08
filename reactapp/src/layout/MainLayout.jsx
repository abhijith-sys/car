import React from 'react'
import { Home } from '../components/Home/Home'
import { About } from '../components/About/About'
import Footer from '../common/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Footer/>
    
    </div>
  )
}

export default MainLayout