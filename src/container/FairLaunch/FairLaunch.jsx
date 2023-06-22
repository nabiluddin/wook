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
      <p className='fair-head-txt'>Fair Launch</p>
      <img src={fairLaunch} alt="fairLaunch" className='fair-img' />
    </motion.div>
  )
}



export default FairLaunch