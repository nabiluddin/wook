import React from 'react'
import Home from '../container/Home/Home'
import FairLaunch from '../container/FairLaunch/FairLaunch'
import TwoW from '../container/TwoW/TwoW'
import Wookonomics from '../container/Wookonomic/Wookonomics'
import Wookiemap from '../container/Wookiemap/Wookiemap'
import FeaturedOn from '../container/FeaturedOn/FeaturedOn'
import Footer from '../container/Footer/Footer'
import HowToBuy from '../container/HowToBuy/HowToBuy'
import BOU from '../container/BOU/BOU'
import UCX from '../container/UCX/UCX'

function Main() {
  return (
    <div>  
      <Home />
      {/* <FairLaunch /> */}
      <UCX />
      <BOU />
      <TwoW />
      <HowToBuy />
      <Wookonomics />
      <Wookiemap />
      <FeaturedOn />
      <Footer check="true" />
      </div>
  )
}

export default Main