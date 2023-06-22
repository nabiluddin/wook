import React from 'react'
import './App.css'
import Home from './container/Home/Home'
import FairLaunch from './container/FairLaunch/FairLaunch'
import TwoW from './container/TwoW/TwoW'
import Wookonomics from './container/Wookonomic/Wookonomics'
import Wookiemap from './container/Wookiemap/Wookiemap'
import FeaturedOn from './container/FeaturedOn/FeaturedOn'
import Footer from './container/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Home />
      <FairLaunch />
      <TwoW/>
      <Wookonomics/>
      <Wookiemap/>
      <FeaturedOn />
      <Footer />
    </div>
  )
}

export default App