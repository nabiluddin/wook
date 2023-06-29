import React from 'react'
import './FairLaunch.scss'
import { motion } from 'framer-motion';
import fairLaunch from '../../assets/fairLaunch.png'
function FairLaunch() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className='fair-launch'>
      <p className='fair-head-txt mb20'>Fair Launch</p>

      <iframe className='iframe' src="https://www.pinksale.finance/launchpad/0x314857fa43243360440580Becb85686fAa606500?chain=ETH" width="90%" height="600px" frameborder="0" scrolling="yes"></iframe>
      {/* <iframe className='iframe' src="https://www.youtube.com/watch?v=5psWCwekmA0&t=38s&ab_channel=CryptoDexWorld" width="90%" height="600px" frameborder="0" scrolling="yes"></iframe> */}
      <p className='fair-head-txt mt20 mb20'>Explanation video</p>
      <iframe className='iframe' width="90%" height="600px" src="https://www.youtube.com/embed/5psWCwekmA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



     </motion.div>
  )
}



export default FairLaunch